import { Text, View,TextInput } from 'react-native';
import { useState } from 'react';

import {useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import styles from '../Styles/NewNoteStyle';
import CustomButton from '../components/Button'


export default function NewNoteScreen({ route }) {

    const navigation = useNavigation();


    return(

        <View style={styles.Container}>

            <TextInput 
            
                style={styles.NoteTitle} 
                placeholder='Titulo..' 
                placeholderTextColor='#c6c3c3' 

                                
            />

            <TextInput 

                style={styles.NoteBody} 

                multiline={true}
                placeholder='' 
                placeholderTextColor='#c6c3c3' 


            
            />

            <View style={styles.ButtonZone}>

            <CustomButton 

                onPress={null} 
                buttonText={<Icon name={'video'} size={30} color="black" />} 
                altura={55} 
                anchura={70} 
                fontSize={25}

            />

            <CustomButton 

                onPress={navigation.navigate('Home')} 
                buttonText="Guardar" 
                altura={60} 
                anchura={150} 
                fontSize={25}

            />


            <CustomButton 

                onPress={null} 
                buttonText={<Icon name={'mic'} size={30} color="black" />} 
                altura={55} 
                anchura={70} 
                fontSize={25}

            />

            </View>

           
            

        </View>
        

        

    )


}