/**
 * @fileOverview Rectangle
 */
import React, { SVGProps, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Animate from 'react-smooth';
import { AnimationDuration, AnimationTiming } from '../util/types';
import { filterProps } from '../util/ReactUtils';

const getTrapezoidPath = (x: number, y: number, upperWidth: number, lowerWidth: number, height: number): string => {
  const widthGap = upperWidth - lowerWidth;
  let path;
  path = `M ${x},${y}`;
  path += `L ${x + upperWidth},${y}`;
  path += `L ${x + upperWidth - widthGap / 2},${y + height}`;
  path += `L ${x + upperWidth - widthGap / 2 - lowerWidth},${y + height}`;
  path += `L ${x},${y} Z`;
  return path;
};

interface TrapezoidProps {
  className?: string;
  x?: number;
  y?: number;
  upperWidth?: number;
  lowerWidth?: number;
  height?: number;

  isUpdateAnimationActive?: boolean;
  animationBegin?: number;
  animationDuration?: AnimationDuration;
  animationEasing?: AnimationTiming;
}

export type Props = SVGProps<SVGPathElement> & TrapezoidProps;

const defaultProps: Props = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: false,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
};

export const Trapezoid: React.FC<Props> = props => {
  const trapezoidProps: Props = { ...defaultProps, ...props };

  const pathRef = useRef<SVGPathElement>();
  const [totalLength, setTotalLength] = useState(-1);

  useEffect(() => {
    if (pathRef.current && pathRef.current.getTotalLength) {
      try {
        const pathTotalLength = pathRef.current.getTotalLength();

        if (pathTotalLength) {
          setTotalLength(pathTotalLength);
        }
      } catch (err) {
        // calculate total length error
      }
    }
  }, []);

  const { x, y, upperWidth, lowerWidth, height, className } = trapezoidProps;
  const { animationEasing, animationDuration, animationBegin, isUpdateAnimationActive } = trapezoidProps;

  if (
    x !== +x ||
    y !== +y ||
    upperWidth !== +upperWidth ||
    lowerWidth !== +lowerWidth ||
    height !== +height ||
    (upperWidth === 0 && lowerWidth === 0) ||
    height === 0
  ) {
    return null;
  }

  const layerClass = clsx('recharts-trapezoid', className);

  if (!isUpdateAnimationActive) {
    return (
      <g>
        <path
          {...filterProps(trapezoidProps, true)}
          className={layerClass}
          d={getTrapezoidPath(x, y, upperWidth, lowerWidth, height)}
        />
      </g>
    );
  }
  return (
    <Animate
      canBegin={totalLength > 0}
      from={{ upperWidth: 0, lowerWidth: 0, height, x, y }}
      to={{ upperWidth, lowerWidth, height, x, y }}
      duration={animationDuration}
      animationEasing={animationEasing}
      isActive={isUpdateAnimationActive}
    >
      {({
        upperWidth: currUpperWidth,
        lowerWidth: currLowerWidth,
        height: currHeight,
        x: currX,
        y: currY,
      }: {
        upperWidth: number;
        lowerWidth: number;
        height: number;
        x: number;
        y: number;
      }) => (
        <Animate
          canBegin={totalLength > 0}
          from={`0px ${totalLength === -1 ? 1 : totalLength}px`}
          to={`${totalLength}px 0px`}
          attributeName="strokeDasharray"
          begin={animationBegin}
          duration={animationDuration}
          easing={animationEasing}
        >
          <path
            {...filterProps(trapezoidProps, true)}
            className={layerClass}
            d={getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight)}
            ref={pathRef}
          />
        </Animate>
      )}
    </Animate>
  );
};
