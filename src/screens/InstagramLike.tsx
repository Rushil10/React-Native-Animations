import React, {useCallback, useRef} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Text,
} from 'react-native';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const URI =
  'https://images.hindustantimes.com/img/2022/09/08/550x309/Emirates-Asia-Cup-Cricket-44_1662651873143_1662651873143_1662651900814_1662651900814.jpg';

const {height, width} = Dimensions.get('window');

const AnimatedImage = Animated.createAnimatedComponent(Image);

const InstagramLike = () => {
  const doubleTapRef = useRef();
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1.5, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);

  const onSingleTap = useCallback(() => {
    opacity.value = withTiming(1.5, undefined, isFinished => {
      if (isFinished) {
        opacity.value = withDelay(500, withTiming(0));
      }
    });
  }, []);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });

  const rTextStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  return (
    <GestureHandlerRootView style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
        <TapGestureHandler
          maxDelayMs={250}
          numberOfTaps={2}
          ref={doubleTapRef}
          onActivated={onDoubleTap}>
          <Animated.View style={styles.container}>
            <ImageBackground style={styles.image} source={{uri: URI}}>
              <AnimatedImage
                source={require('../images/century.png')}
                style={(styles.century, rStyle)}
              />
            </ImageBackground>
            <Animated.Text style={[styles.text, rTextStyle]}>
              Virat Scores 71st 100 🎉🎉
            </Animated.Text>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  century: {
    height: width / 3,
    width: width / 3,
  },
  text: {
    fontSize: 29,
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default InstagramLike;
