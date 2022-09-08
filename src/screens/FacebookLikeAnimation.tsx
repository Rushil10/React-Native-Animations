import React, {useState} from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  runOnUI,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const URI =
  'https://images.hindustantimes.com/img/2022/09/08/550x309/Emirates-Asia-Cup-Cricket-44_1662651873143_1662651873143_1662651900814_1662651900814.jpg';

const {width} = Dimensions.get('window');

const AnimatedImage = Animated.createAnimatedComponent(Image);

const LIKE_BUTTON_SIZE = 55;
const POST_PADDING_TOP = 9;
const GIF_SIZE = 45;
const GIF_MARGIN = 2;
const AREA = GIF_SIZE + GIF_MARGIN;

const LOVE_LINK = 'https://c.tenor.com/RYibGej0GvcAAAAi/facebook-emoji.gif';
const LIKE_LINK = 'https://c.tenor.com/_e4JAx0iHS0AAAAi/facebook-emoji.gif';
const LAUGH_LINK = 'https://c.tenor.com/J1Nk6FEG2yYAAAAi/facebook-emoji.gif';
const ANGRY_LINK = 'https://c.tenor.com/3uvY5C-NJREAAAAi/facebook-emoji.gif';
const CARE_LINK = 'https://c.tenor.com/PqWloRzw0R0AAAAj/facebook-emoji.gif';
const SHOCK_LINK = 'https://c.tenor.com/1mmqCqoZsdQAAAAi/facebook-emoji.gif';

const FacebookLike = () => {
  const emoConY = useSharedValue(0);
  const allOptionsOpacity = useSharedValue(0);
  const allOptionsX = useSharedValue(0);
  const allOptionsWidth = useSharedValue(0);
  const likeScale = useSharedValue(1);

  const rLikeStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: likeScale.value}],
    };
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      //width: allOptionsWidth.value,
      opacity: allOptionsOpacity.value,
      borderRadius: 15,
      flex: 1,
      transform: [{translateY: emoConY.value}, {translateX: allOptionsX.value}],
    };
  });

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: event => {
      allOptionsOpacity.value = withTiming(1);
      allOptionsWidth.value = withTiming(AREA);
      allOptionsX.value = withTiming(event.absoluteX);
      emoConY.value = withTiming(-(LIKE_BUTTON_SIZE + 5));
    },
    onActive: event => {
      const start = event.absoluteX + 5;
      if (event.translationX > start && event.translationX < AREA + start) {
        console.log(event.translationX);
        likeScale.value = withTiming(1.5);
      } else {
        likeScale.value = withTiming(1);
      }
    },
    onEnd: event => {
      allOptionsOpacity.value = 0;
      emoConY.value = 0;
      allOptionsWidth.value = 0;
      allOptionsX.value = 0;
    },
    onCancel: event => [console.log('Cancelled')],
  });
  return (
    <GestureHandlerRootView style={styles.container}>
      <Image style={styles.image} source={{uri: URI}} />
      <View style={styles.row}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View>
            <Animated.View style={[styles.allOptions, rStyle]}>
              <AnimatedImage
                style={[styles.gifStyle, rLikeStyle]}
                source={{uri: LIKE_LINK}}
              />
              <AnimatedImage
                style={styles.gifStyle}
                source={{uri: LOVE_LINK}}
              />
              <AnimatedImage
                style={styles.gifStyle}
                source={{uri: LAUGH_LINK}}
              />
              <AnimatedImage
                style={styles.gifStyle}
                source={{uri: ANGRY_LINK}}
              />
              <AnimatedImage
                style={styles.gifStyle}
                source={{uri: CARE_LINK}}
              />
              <AnimatedImage
                style={styles.gifStyle}
                source={{uri: SHOCK_LINK}}
              />
            </Animated.View>
            <AnimatedImage
              style={styles.like}
              source={require('../images/like.png')}
            />
          </Animated.View>
        </PanGestureHandler>
        <AnimatedImage source={{uri: LOVE_LINK}} />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allOptions: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  image: {
    width: width,
    height: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gifStyle: {
    height: GIF_SIZE,
    width: GIF_SIZE,
    margin: GIF_MARGIN,
  },
  century: {
    height: width / 3,
    width: width / 3,
  },
  like: {
    height: LIKE_BUTTON_SIZE,
    width: LIKE_BUTTON_SIZE,
    backgroundColor: 'black',
  },
  row: {
    width: width,
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
});

export default FacebookLike;
