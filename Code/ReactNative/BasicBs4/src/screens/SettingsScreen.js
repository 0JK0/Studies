import { Text, ScrollView,View, Image } from 'react-native';

import {useNavigation } from '@react-navigation/native';

import styles from '../Styles/SettingsStyle';
import SettingsButton from '../components/SettingsButton'



function SettingsScreen({ }) {

  const navigation = useNavigation();

  return(

    <ScrollView style={styles.Container} contentContainerStyle={styles.ContentContainer}>

      <View style={styles.ProfileZone}>

        <Image style={styles.UserPFP} source={require('../../assets/icon.png')}/> 
        <Text style={styles.UserName}>123456789_12345678</Text>

      </View>
      
      

      <Text style={styles.Text}> USER </Text>
      <SettingsButton buttonText='Edit Profile' />
      <SettingsButton buttonText='Edit Private Passcode' />

      <Text style={styles.Text}> NOTES </Text>
      <SettingsButton buttonText='Sync To Cloud' />
      <SettingsButton buttonText='Open Storage' />
      <SettingsButton buttonText='Export Notes' />

      <Text style={styles.Text}> APP </Text>
      <SettingsButton buttonText='Notifications' />
      <SettingsButton buttonText='Version Info' />
      
      <Text style={styles.Text}> Account </Text>
      <SettingsButton buttonText='Delete Account' />
      <SettingsButton buttonText='Close Session' />
      
      

    </ScrollView>

  )



}

export default SettingsScreen;