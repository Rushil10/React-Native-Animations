import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {width, height} = Dimensions.get('window');

interface PageProps {
  title: String;
  index: number;
}

const Page2 = (props: PageProps) => {
  return <View></View>;
};

export default Page2;
