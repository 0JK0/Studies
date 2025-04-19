import { Text, View,TextInput } from 'react-native';
import { useState,useEffect } from 'react';

import {useNavigation } from '@react-navigation/native';
import { useSQLiteContext } from "expo-sqlite";
import Icon from 'react-native-vector-icons/Feather';

import styles from '../Styles/NewNoteStyle';
import CustomButton from '../components/Button'

import { saveNewNote } from '../Database/notesDb';
import { getCurrentUser, } from '../Database/db';

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
}
  

export default function NewNoteScreen({ route }) {

    const DB = useSQLiteContext();
    const navigation = useNavigation();

    const [title,setTitle] = useState ('');
    const [body,setBody] = useState ('');
    const [date,setDate] = useState('')
    const [noteType,setNoteType] = useState ('');

    const [user, setUser] = useState('');
    const [userId,setUserId] = useState();
        

    useEffect(() => {
        setDate(getCurrentDate());
    }, []);

    const handleSave = async () => {
        try{
            console.log("++ Getting session...");
            const session = await getCurrentUser();
            console.log(" Session result: ", session);
    
            if (!session) {
    
                console.log("No user session found.");
                return;
    
            } 
    
            const { userName, userId } = session;
            console.log("> Session unpacked", userName, userId);
    
            console.log(`==== DATE: ${date} == currentUser: ${userName} ==== UserID: ${userId} =====`);
    
            //TEMPORAL
            const NoteType = "video";
            console.log("> Preparing to save...");

            try{

                await saveNewNote(date,title,body,NoteType,userId,DB);
    
            }catch(error){console.error("Handle Save --> saveNewNote Error: ",error)}
    
            console.log("> Navigating to Home...");
            navigation.navigate('Home')

        } catch(error){

            console.error("first part of handleSave: ",error)

        }


    }
    
   

    return(

        <View style={styles.Container}>

            <TextInput 
            
                style={styles.NoteTitle} 
                placeholder='Titulo..' 
                placeholderTextColor='#c6c3c3' 

                value={title}
          
                onChangeText={setTitle}
                                
            />

            <TextInput 

                style={styles.NoteBody} 

                multiline={true}
                placeholder='' 
                placeholderTextColor='#c6c3c3' 

                value={body}
          
                onChangeText={setBody}
            
            />

            <View style={styles.ButtonZone}>

            <CustomButton 

                onPress={() => navigation.navigate('Home')}
                buttonText={<Icon name={'video'} size={30} color="black" />} 
                altura={55} 
                anchura={70} 
                fontSize={25}

            />

            <CustomButton 

                onPress={() => handleSave()}
                buttonText="Guardar" 
                altura={60} 
                anchura={150} 
                fontSize={25}

            />


            <CustomButton 

                onPress={() => navigation.navigate('Home')}
                buttonText={<Icon name={'mic'} size={30} color="black" />} 
                altura={55} 
                anchura={70} 
                fontSize={25}

            />

            </View>

           
            

        </View>
        

        

    )


}