import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const URI = 'https://wallpaper.dog/large/11014623.jpg';

const {height, width} = Dimensions.get('window');

const AnimatedImage = Animated.createAnimatedComponent(Image);

const ImageZoom = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });

  const focalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: focalX.value}, {translateY: focalY.value}],
    };
  });

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: event => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
        console.log(focalX.value, focalY.value);
      },
      onEnd: () => {
        scale.value = withTiming(1);
      },
    });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.View style={{flex: 1}}>
          <AnimatedImage style={[{flex: 1}, rStyle]} source={{uri: URI}} />
          <Animated.View style={[styles.focalPoint, focalPointStyle]} />
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});

export default ImageZoom;
