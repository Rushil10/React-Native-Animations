import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

interface MyCodeParams {
  title: String;
  onPress: () => void;
}

const ScreenButton = (props: MyCodeParams) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
      <Text style={styles.titleStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1da1f2',
    padding: 15,
    borderRadius: 25,
    marginTop: 25,
    marginHorizontal: 15,
  },
  titleStyle: {
    fontSize: 21,
    color: 'white',
  },
});

export default ScreenButton;
