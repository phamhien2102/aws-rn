import React, { useState, useRef, ReactElement } from 'react';
import { Animated, PanResponder } from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import { styles } from '../circle/styles';

interface Props {
    children: ReactElement;
    width: number;
    height: number;
    borderRadius?: number;
    left: number;
    top: number;
}

const Draggable = (props: Props) => {
    const pan = useRef(new Animated.ValueXY()).current;
    const [scale] = useState(new Animated.Value(1));

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                });
            },
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            },
        }),
    ).current;

    const onZoomEvent = Animated.event(
        [
            {
                nativeEvent: { scale: scale },
            },
        ],
        {
            useNativeDriver: false,
        },
    );

    const onZoomStateChange = () => {};

    return (
        <PinchGestureHandler onGestureEvent={onZoomEvent} onHandlerStateChange={onZoomStateChange}>
            <Animated.View
                style={[
                    styles.wrapper,
                    {
                        width: props.width,
                        height: props.height,
                        borderRadius: props.borderRadius ?? 0,
                        left: props.left,
                        top: props.top,
                    },
                    { transform: [{ translateX: pan.x }, { translateY: pan.y }, { scale: scale }] },
                ]}
                {...panResponder.panHandlers}>
                {props.children}
            </Animated.View>
        </PinchGestureHandler>
    );
};

export default React.memo(Draggable);
