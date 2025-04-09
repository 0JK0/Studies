import { Text, ScrollView,StyleSheet } from 'react-native';

import NoteCard from './NoteCard';

const RecentNotes  = ({Header}) => {

  
  return(

    <ScrollView style={styles.RecentNotes} contentContainerStyle={styles.RecentNotesContent}>

      <Text style={styles.Text}> {Header} </Text>

      <NoteCard Tittle={"NotaSinTitulo"} Date={'20-06-2025'} NoteType={'video'}/>
      <NoteCard Tittle={"NotaSinTitulo"} Date={'20-06-2025'} NoteType={'video'}/>
      <NoteCard Tittle={"NotaSinTitulo"} Date={'20-06-2025'} NoteType={'audio'}/>
      <NoteCard Tittle={"NotaSinTitulo"} Date={'20-06-2025'} NoteType={'texto'}/>
      <NoteCard Tittle={"NotaSinTitulo"} Date={'20-06-2025'} NoteType={'audio'}/>
      <NoteCard Tittle={"NotaSinTitulo"} Date={'20-06-2025'} NoteType={'video'}/>
      <NoteCard Tittle={"NotaSinTitulo"} Date={'20-06-2025'} NoteType={'texto'}/>
      <NoteCard Tittle={"NotaSinTitulo"} Date={'20-06-2025'} NoteType={'video'}/>
      <NoteCard Tittle={"NotaSinTitulo"} Date={'20-06-2025'} NoteType={'video'}/>


    </ScrollView>

    

  )


} 

const styles = StyleSheet.create({


    RecentNotes: {

        backgroundColor: '#000',
    
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 15,
    
        width: '95%',
        margin: 10,
        marginBottom: 5,
    
        flexGrow: 0,
        maxHeight: 400,
    
    },
    
    RecentNotesContent: {
    
        padding: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
    
    },


  Text: {

    fontSize: 30,
    margin: 4,

    color:'#fff',

    fontFamily:'Mx437',

  },

})

export default RecentNotes;