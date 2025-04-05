import { Text, ScrollView } from 'react-native';

import {useNavigation } from '@react-navigation/native';

import styles from '../Styles/SettingsStyle';



function SettingsScreen({ }) {

  const navigation = useNavigation();

  return(

    <ScrollView style={styles.Container} contentContainerStyle={styles.ContentContainer}>

        <Text style={styles.Text}> UNDER DEVELOPMENT </Text>

    </ScrollView>

  )



}

export default SettingsScreen;