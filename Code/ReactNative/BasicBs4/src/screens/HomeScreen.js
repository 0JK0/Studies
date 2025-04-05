import { Text, View, ScrollView } from 'react-native';

import {useNavigation } from '@react-navigation/native';
import { Background, Button } from '@react-navigation/elements';

import { useFonts } from 'expo-font';

import styles from '../Styles/HomeStyle';
import LoginScreen from './Login';

import CustomButton from '../components/Button';
import CalendarComponent from '../components/Calendar';
import NoteCard from '../components/NoteCard';


export default function HomeScreen({ route }) {

  const navigation = useNavigation();
 
  const {username,password} = route.params || {}; 

  return (

    <View style={styles.container}>

      <CalendarComponent />

      <ScrollView style={styles.RecentNotes} contentContainerStyle={styles.RecentNotesContent}>

        <Text style={styles.Text}> NOTAS RECIENTES </Text>

        <NoteCard Tittle={"TituloNota"} Date={"26-05-2025"} NoteType={'video'}/>
        <NoteCard Tittle={"TituloNota"} Date={"26-05-2025"} NoteType={'video'} />
        <NoteCard Tittle={"TituloNota"} Date={"26-05-2025"} NoteType={'text'}/>
        <NoteCard Tittle={"TituloNota"} Date={"26-05-2025"} NoteType={'audio'}/>
        <NoteCard Tittle={"TituloNota"} Date={"26-05-2025"} NoteType={'video'} />
        <NoteCard Tittle={"TituloNota"} Date={"26-05-2025"} NoteType={'text'}/>
        <NoteCard Tittle={"TituloNota"} Date={"26-05-2025"} NoteType={'audio'}/>
        <NoteCard Tittle={"TituloNota"} Date={"26-05-2025"} NoteType={'video'} />
        <NoteCard Tittle={"TituloNota"} Date={"26-05-2025"} NoteType={'text'}/>
        <NoteCard Tittle={"TituloNota"} Date={"26-05-2025"} NoteType={'audio'}/>

      </ScrollView>



      <CustomButton onPress={() => navigation.navigate('NewNote')} buttonText="Nueva Nota" altura={55} anchura={200} fontSize={25}/>


    </View>
  );
}

{/* <Text style={styles.Text}>THIS IS THE HomeScreen</Text>
<Text style={styles.Text}> UserName: {JSON.stringify(username)}</Text>
<Text style={styles.Text}> Password: {JSON.stringify(password)}</Text> */}