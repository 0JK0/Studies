import React, { useState, useEffect } from 'react';
import { Text, View,TextInput } from 'react-native';

import CustomButton from '../components/Button';

import { useNavigation } from '@react-navigation/native';

import styles from '../Styles/LoginStyle';


export default function LoginScreen() {

  // Init UseNavigation
  const navigation = useNavigation();

  // Getting Username AND Password Text
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')

  const handleLogin = () => {

    navigation.navigate('Home', {
      // Navigate to the Screen 'Home', Params to navigate with
      username: Username,
      password: Password,

    })
  };

  return (

    <View style={styles.container}>

        <View style={styles.CustomButton}>
         <CustomButton 
         onPress={() => navigation.navigate('SigIn')}
         buttonText={"SIGN IN"}

         anchura={108}
         altura={45}
         fontSize={18}

         /> 
        </View>
        

        <Text style={styles.Text} > LOG IN </Text>

        <TextInput

          style={styles.TextInput} 
          placeholder='Username' 
          placeholderTextColor='#c6c3c3' 
          
          // Asing the Value of the TextInput to Username 
          value={Username}
          
          // When it cahnges activate the UseState Switch so the value is passed to the Var
          onChangeText={setUsername}
          
        /> 

        <TextInput 

          style={styles.TextInput} 
          placeholder='Password' 
          placeholderTextColor='#c6c3c3' 
          secureTextEntry={true}
          textContentType="password"

          value={Password}
          onChangeText={setPassword}
          
          
        />

        <CustomButton 
          onPress={handleLogin}  
          buttonText="SUBMIT"

          anchura={110}
          altura={50}
          fontSize={19}
          
        />


      
    </View>
  );
}
