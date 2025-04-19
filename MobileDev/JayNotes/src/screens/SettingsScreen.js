import { Text, ScrollView,View, Image } from 'react-native';
import { useState,useEffect } from 'react';

import {useNavigation } from '@react-navigation/native';
import { useSQLiteContext } from "expo-sqlite";

import styles from '../Styles/SettingsStyle';
import SettingsButton from '../components/SettingsButton'

import { getCurrentUser,getProfilePicture } from '../Database/db';



function SettingsScreen({ }) {
  const DB = useSQLiteContext();

  const [user, setUser] = useState(null);
  const [picture, setPicture] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    
    const loadData = async () => {

      const session = await getCurrentUser();
      setUser(session.userName);
  
      const userPic = await getProfilePicture(session.userName, DB);
      setPicture(userPic);


    };
  
    loadData();
}, []);

  console.log(`Current User: ${user} -- UserPicture?: ${picture}`)

  return(
    

    <ScrollView style={styles.Container} contentContainerStyle={styles.ContentContainer}>

      <View style={styles.ProfileZone}>

        <Image style={styles.UserPFP} source={{ uri: picture || "../../assets/images/icon.png" }}/> 
        <Text style={styles.UserName}>{user || "Loading..."}</Text>

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