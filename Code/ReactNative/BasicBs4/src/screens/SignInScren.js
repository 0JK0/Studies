import React, { useState } from 'react';
import { Text, View,TextInput } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from '../Styles/SignInStyle';
import CustomButton from '../components/Button';
import CustomSwitch from '../components/Checkmark';


export default function SigInScreen() {

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
  }

  const handleToggle = (value) => {
    console.log('Switch is now:', value);
    
  };

  return (

    <View style={styles.container}>
      
        <Text style={styles.Text} > SIG IN </Text>

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


        <TextInput 

          style={styles.TextInput} 
          placeholder='Comfirm Password' 
          placeholderTextColor='#c6c3c3' 
          secureTextEntry={true}
          textContentType="password"

          value={Password}
          onChangeText={setPassword}


        />

        <View style={styles.Toggle}>

          <Text style={styles.ToggleLabel}> Stay Logged In</Text>
          <CustomSwitch  onToggle={handleToggle} />

          
          
        </View>
        

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
