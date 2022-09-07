/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BasicAnimations from './src/screens/BasicAnimations';
import AllAnimations from './src/screens/AllAnimations';
import PanGesture from './src/screens/PanGesture';
import InterpolateScollView from './src/screens/InterpolateScollView';
import InterpolateColors from './src/screens/InterpolateColors';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={AllAnimations} />
        <Stack.Screen
          name="Basic"
          component={BasicAnimations}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="PanGesture"
          component={PanGesture}
          options={{animation: 'slide_from_left'}}
        />
        <Stack.Screen
          name="InterpolateSV"
          component={InterpolateScollView}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="InterpolateColor"
          component={InterpolateColors}
          options={{animation: 'slide_from_left'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
