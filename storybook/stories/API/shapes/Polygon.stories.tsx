import React from 'react';
import { Customized, ComposedChart, ResponsiveContainer, Polygon } from '../../../../src';
import { GeneralStyle } from '../props/Styles';
import {
  onAbort,
  onAbortCapture,
  onAnimationEnd,
  onAnimationEndCapture,
  onAnimationIteration,
  onAnimationIterationCapture,
  onAnimationStart,
  onAnimationStartCapture,
  onAuxClick,
  onAuxClickCapture,
  onBeforeInput,
  onBeforeInputCapture,
  onBlur,
  onBlurCapture,
  onCanPlay,
  onCanPlayCapture,
  onCanPlayThrough,
  onCanPlayThroughCapture,
  onChange,
  onChangeCapture,
  onClick,
  onClickCapture,
  onCompositionEnd,
  onCompositionEndCapture,
  onCompositionStart,
  onCompositionStartCapture,
  onCompositionUpdate,
  onCompositionUpdateCapture,
  onContextMenu,
  onContextMenuCapture,
  onCopy,
  onCopyCapture,
  onCut,
  onCutCapture,
  onDoubleClick,
  onDoubleClickCapture,
  onDrag,
  onDragCapture,
  onDragEnd,
  onDragEndCapture,
  onDragEnter,
  onDragEnterCapture,
  onDragExit,
  onDragExitCapture,
  onDragLeave,
  onDragLeaveCapture,
  onDragOver,
  onDragOverCapture,
  onDragStart,
  onDragStartCapture,
  onDrop,
  onDropCapture,
  onDurationChange,
  onDurationChangeCapture,
  onEmptied,
  onEmptiedCapture,
  onEncrypted,
  onEncryptedCapture,
  onEnded,
  onEndedCapture,
  onError,
  onErrorCapture,
  onFocus,
  onFocusCapture,
  onGotPointerCapture,
  onGotPointerCaptureCapture,
  onInput,
  onInputCapture,
  onInvalid,
  onInvalidCapture,
  onKeyDown,
  onKeyDownCapture,
  onKeyPress,
  onKeyPressCapture,
  onKeyUp,
  onKeyUpCapture,
  onLoad,
  onLoadCapture,
  onLoadedData,
  onLoadedDataCapture,
  onLoadedMetadata,
  onLoadedMetadataCapture,
  onLoadStart,
  onLoadStartCapture,
  onLostPointerCapture,
  onLostPointerCaptureCapture,
  onMouseDown,
  onMouseDownCapture,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  onMouseMoveCapture,
  onMouseOut,
  onMouseOutCapture,
  onMouseOver,
  onMouseOverCapture,
  onMouseUp,
  onMouseUpCapture,
  onPaste,
  onPasteCapture,
  onPause,
  onPauseCapture,
  onPlay,
  onPlayCapture,
  onPlaying,
  onPlayingCapture,
  onPointerCancel,
  onPointerCancelCapture,
  onPointerDown,
  onPointerDownCapture,
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  onPointerMoveCapture,
  onPointerOut,
  onPointerOutCapture,
  onPointerOver,
  onPointerOverCapture,
  onPointerUp,
  onPointerUpCapture,
  onProgress,
  onProgressCapture,
  onRateChange,
  onRateChangeCapture,
  onReset,
  onResetCapture,
  onScroll,
  onScrollCapture,
  onSeeked,
  onSeekedCapture,
  onSeeking,
  onSeekingCapture,
  onSelect,
  onSelectCapture,
  onStalled,
  onStalledCapture,
  onSubmit,
  onSubmitCapture,
  onSuspend,
  onSuspendCapture,
  onTimeUpdate,
  onTimeUpdateCapture,
  onTouchCancel,
  onTouchCancelCapture,
  onTouchEnd,
  onTouchEndCapture,
  onTouchMove,
  onTouchMoveCapture,
  onTouchStart,
  onTouchStartCapture,
  onTransitionEnd,
  onTransitionEndCapture,
  onVolumeChange,
  onVolumeChangeCapture,
  onWaiting,
  onWaitingCapture,
  onWheel,
  onWheelCapture,
} from '../props/EventHandlers';

const pointDefault = [
  { x: 100, y: 100 },
  { x: 300, y: 100 },
  { x: 100, y: 300 },
  { x: 300, y: 300 },
];

export default {
  component: Polygon,
  argTypes: {
    points: {
      description: `The coordinates of all the verteces of the polygon, like [{ x, y }].<br/> By default. 
      lines will be drawn to connect all verteces, in order to create a connected shape. If you want to 
      skip drawing a line between 2 verteces, add a null point.`,
      table: {
        type: { summary: 'Coordinate[]' },
        category: 'General',
      },
      defaultValue: pointDefault,
    },
    baseLinePoints: {
      description: `Provide another polygon to receive the same visual and event handling treatment. This is
      intended to be used in cases like icons, where multiple shapes may be necessary for the same layer.`,
      table: {
        type: {
          summary: 'Coordinate[]',
        },
        category: 'General',
      },
      defaultValue: [],
    },
    connectNulls: {
      description: `Determines if null points should be filtered out of the draw order.<br/>If there are
      null points, and connectNulls is not true, the fill style will be ignored.`,
      table: {
        type: {
          summary: 'boolean',
        },
        category: 'General',
      },
      defaultValue: false,
    },
    stroke: GeneralStyle.stroke,
    fill: GeneralStyle.fill,
    // Deprecated
    dangerouslySetInnerHTML: { table: { category: 'Deprecated', disable: true } },
    // Event Handlers available
    onCopy,
    onCopyCapture,
    onCut,
    onCutCapture,
    onPaste,
    onPasteCapture,
    onCompositionEnd,
    onCompositionEndCapture,
    onCompositionStart,
    onCompositionStartCapture,
    onCompositionUpdate,
    onCompositionUpdateCapture,
    onFocus,
    onFocusCapture,
    onBlur,
    onBlurCapture,
    onChange,
    onChangeCapture,
    onBeforeInput,
    onBeforeInputCapture,
    onInput,
    onInputCapture,
    onReset,
    onResetCapture,
    onSubmit,
    onSubmitCapture,
    onInvalid,
    onInvalidCapture,
    onLoad,
    onLoadCapture,
    onError,
    onErrorCapture,
    onKeyDown,
    onKeyDownCapture,
    onKeyPress,
    onKeyPressCapture,
    onKeyUp,
    onKeyUpCapture,
    onAbort,
    onAbortCapture,
    onCanPlay,
    onCanPlayCapture,
    onCanPlayThrough,
    onCanPlayThroughCapture,
    onDurationChange,
    onDurationChangeCapture,
    onEmptied,
    onEmptiedCapture,
    onEncrypted,
    onEncryptedCapture,
    onEnded,
    onEndedCapture,
    onLoadedData,
    onLoadedDataCapture,
    onLoadedMetadata,
    onLoadedMetadataCapture,
    onLoadStart,
    onLoadStartCapture,
    onPause,
    onPauseCapture,
    onPlay,
    onPlayCapture,
    onPlaying,
    onPlayingCapture,
    onProgress,
    onProgressCapture,
    onRateChange,
    onRateChangeCapture,
    onSeeked,
    onSeekedCapture,
    onSeeking,
    onSeekingCapture,
    onStalled,
    onStalledCapture,
    onSuspend,
    onSuspendCapture,
    onTimeUpdate,
    onTimeUpdateCapture,
    onVolumeChange,
    onVolumeChangeCapture,
    onWaiting,
    onWaitingCapture,
    onAuxClick,
    onAuxClickCapture,
    onClick,
    onClickCapture,
    onContextMenu,
    onContextMenuCapture,
    onDoubleClick,
    onDoubleClickCapture,
    onDrag,
    onDragCapture,
    onDragEnd,
    onDragEndCapture,
    onDragEnter,
    onDragEnterCapture,
    onDragExit,
    onDragExitCapture,
    onDragLeave,
    onDragLeaveCapture,
    onDragOver,
    onDragOverCapture,
    onDragStart,
    onDragStartCapture,
    onDrop,
    onDropCapture,
    onMouseDown,
    onMouseDownCapture,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseMoveCapture,
    onMouseOut,
    onMouseOutCapture,
    onMouseOver,
    onMouseOverCapture,
    onMouseUp,
    onMouseUpCapture,
    onSelect,
    onSelectCapture,
    onTouchCancel,
    onTouchCancelCapture,
    onTouchEnd,
    onTouchEndCapture,
    onTouchMove,
    onTouchMoveCapture,
    onTouchStart,
    onTouchStartCapture,
    onPointerDown,
    onPointerDownCapture,
    onPointerMove,
    onPointerMoveCapture,
    onPointerUp,
    onPointerUpCapture,
    onPointerCancel,
    onPointerCancelCapture,
    onPointerEnter,
    onPointerLeave,
    onPointerOver,
    onPointerOverCapture,
    onPointerOut,
    onPointerOutCapture,
    onGotPointerCapture,
    onGotPointerCaptureCapture,
    onLostPointerCapture,
    onLostPointerCaptureCapture,
    onScroll,
    onScrollCapture,
    onWheel,
    onWheelCapture,
    onAnimationStart,
    onAnimationStartCapture,
    onAnimationEnd,
    onAnimationEndCapture,
    onAnimationIteration,
    onAnimationIterationCapture,
    onTransitionEnd,
    onTransitionEndCapture,
  },
};

export const API = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={500}
          height={300}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Customized component={<Polygon {...args} />} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    points: pointDefault,
    stroke: '#000',
    fill: 'red',
  },
};

export const UsingConnectNulls = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={250}
          height={250}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Customized component={<Polygon {...args} />} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    points: [{ x: 50, y: 50 }, { x: 0, y: 100 }, { x: 0, y: 200 }, { x: 100, y: 200 }, { x: 100, y: 100 }, null],
    stroke: '#000',
    fill: 'red',
    connectNulls: true,
  },
};

export const UsingBaselinePoints = {
  render: (args: Record<string, any>) => {
    return (
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart
          width={250}
          height={250}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Customized component={<Polygon {...args} />} />
        </ComposedChart>
      </ResponsiveContainer>
    );
  },
  args: {
    points: [
      { x: 40, y: 20 },
      { x: 60, y: 20 },
      { x: 60, y: 60 },
      { x: 70, y: 60 },
      { x: 50, y: 90 },
      { x: 30, y: 60 },
      { x: 40, y: 60 },
    ],
    baseLinePoints: [
      { x: 15, y: 95 },
      { x: 85, y: 95 },
    ],
    stroke: '#000',
    fill: 'red',
    connectNulls: false,
  },
};
