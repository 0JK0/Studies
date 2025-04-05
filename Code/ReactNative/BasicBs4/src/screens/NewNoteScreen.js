import { Text, View } from 'react-native';

import {useNavigation } from '@react-navigation/native';

import styles from '../Styles/NewNoteStyle';
import NoteCard from '../components/NoteCard';


export default function NewNoteScreen({ route }) {

    const navigation = useNavigation();

    return(

        <View style={styles.Container}>

            <Text style={styles.Text}> UNDER DEVELOPMENT </Text>

        </View>
        

        

    )


}