import { Text, View, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStack from './src/navigation/StackNavigator'
import {useFonts} from 'expo-font'
import {SQLiteProvider,SQLiteDatabase} from 'expo-sqlite'



export default function Index() {

  const createdDbIfNeeded = async(db:SQLiteDatabase) =>{

    console.log('CREATING DB IF NEEDED');

    await db.execAsync(

        `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT, image TEXT);`
    );
  }


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

    <SQLiteProvider databaseName='app.db' onInit={createdDbIfNeeded}>
      
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>

    </SQLiteProvider>

  );
}
