//FormStyle.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    
    backgroundColor: '#000',

    alignItems: 'center',
    justifyContent: 'center',

    width:'100%',
    height:'100%',

  },

  Text: {

    fontSize: 30,
    margin: 4,

    color:'#fff',

    fontFamily:'Mx437',

  },

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




});

export default styles;