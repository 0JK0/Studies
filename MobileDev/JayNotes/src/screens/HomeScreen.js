import { Text, View, ScrollView } from 'react-native';

import {useNavigation } from '@react-navigation/native';
import { useState,useEffect,getParam } from 'react';


import styles from '../Styles/HomeStyle';

import CustomButton from '../components/Button';
import CalendarComponent from '../components/Calendar';
import RecentNotes from '../components/NotasRecientes';


export default function HomeScreen({ route }) {

  const navigation = useNavigation();
 
  return (

    <View style={styles.container}>

      <CalendarComponent />

      <RecentNotes Header={'NOTAS RECIENTES'} />

      <CustomButton onPress={() => navigation.navigate('NewNote')} buttonText="Nueva Nota" altura={55} anchura={200} fontSize={25}/>


    </View>
  );
}