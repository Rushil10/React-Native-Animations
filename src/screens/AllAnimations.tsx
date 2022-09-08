import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet} from 'react-native';
import ScreenButton from '../components/ScreenButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const AllAnimations = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <ScreenButton
          title="Basic Animation"
          onPress={() => navigation.push('Basic')}
        />
        <ScreenButton
          title="Pan Gesture"
          onPress={() => navigation.push('PanGesture')}
        />
        <ScreenButton
          title="Interpolate ScrollView"
          onPress={() => navigation.push('InterpolateSV')}
        />
        <ScreenButton
          title="Interpolate Color"
          onPress={() => navigation.push('InterpolateColor')}
        />
        <ScreenButton
          title="ImageZoom"
          onPress={() => navigation.push('ImageZoom')}
        />
        <ScreenButton
          title="InstagramLike"
          onPress={() => navigation.push('InstagramLike')}
        />
        <ScreenButton
          title="FacebookLike"
          onPress={() => navigation.push('FacebookLike')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
  },
  scrollContainer: {
    marginTop: 25,
  },
});

export default AllAnimations;
