import React, { useState } from 'react';
import { Text, View,TextInput,Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from '../Styles/SignIn2Style';
import CustomButton from '../components/Button';
import CustomSwitch from '../components/Checkmark';
import PfpUpload from '../components/ImageInsert';

import { useSQLiteContext } from "expo-sqlite";
import { registerUser } from '../Database/db';


export default function SigInScreen2({route,}) {
  const DB = useSQLiteContext();
  const navigation = useNavigation();

  const { name, password } = route.params || {};

  const [StayLogged,setStayLogged] = useState(false)
  const [Image,setImage] = useState('')

  const HandleSingIn = async() => {
    try{
      console.log("Submit button pressed"); 
      
      console.log("DB object: ", DB);
  
      console.log("HandleSingIn, Sends: ", name , password)
  
      await registerUser(name,password,Image,DB)
      navigation.navigate('Login')

    } catch (error){

      console.error(error)

    }

  };

  const handleToggle = (value) => {
    
    setStayLogged(value)
    console.log(value)
    console.log(name)
    console.log(password)
    console.log("Route params:", route.params); 



  };

  const handleImageSelected = (imageBase64) => {

    setImage(imageBase64);
    console.log("Profile picture selected:", imageBase64);
  };

  return (

    <View style={styles.container}>


        <PfpUpload name={name} onImageSelected={handleImageSelected}/>

       
        <View style={styles.Toggle}>

          <Text style={styles.ToggleLabel}> Stay Logged In?</Text>
          <CustomSwitch  onToggle={handleToggle} />

        </View>
        

        <CustomButton 
          onPress={() => HandleSingIn()}
          buttonText="SUBMIT"

          anchura={110}
          altura={50}
          fontSize={19}
          
        />


      
    </View>
  );
}
