import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'react-native-fonts';

import LoginScreen from './src/screens/Login';
import RootStack from './src/navigation/StackNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Mx437': require('./assets/fonts/Mx437_IBM_VGA_8x16.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
