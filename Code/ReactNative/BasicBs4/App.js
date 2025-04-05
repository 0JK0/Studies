//App.js
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';

import LoginScreen from './src/screens/Login'
import RootStack from './src/navigation/StackNavigator';

export default function App() {

  const [fontsLoaded] = useFonts({

    'Mx437': require('./assets/fonts/Mx437_IBM_VGA_8x16.ttf')


  });

  if (!fontsLoaded) { return null;}
  
  return (


    <NavigationContainer> <RootStack /> </NavigationContainer>



  );
}
