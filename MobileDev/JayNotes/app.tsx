import { Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import {useFonts} from 'expo-font'

import RootStack from './src/navigation/StackNavigator'

export default function Index() {

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
