import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

import {Calendar, CalendarList, Agenda,LocaleConfig} from 'react-native-calendars';

import {useNavigation } from '@react-navigation/native';


const CalendarComponent = ({  }) => {

    const navigation = useNavigation();

    return(

    
        <View style={styles.container}>

            <Calendar 
                style={styles.Calendar}
                theme={styles.theme} 

                enableSwipeMonths={true}
                hideArrows= {true}
                
                onDayPress={day => {

                    console.log('Selected Day',day);
                    navigation.navigate('NewNote');
                
                }}

                
                />

        </View>



    )



}
const styles = StyleSheet.create({

    container: {

      
      backgroundColor: '#000',
  
      alignItems: 'center',
      justifyContent: 'center',

      width: '100%',
    },
  
    Text: {
  
      fontSize: 20,
  
      color:'#fff',
  
      fontFamily:'Mx437',
  
    },

    Calendar:{

        width: 370,   
        height: 320,

        color: '#fff',

        fontFamily:'Mx437',

        borderWidth: 3,
        borderColor: 'white',

        margin: 15,
        

    },

    theme: {

        textDayFontFamily: 'Mx437',
        textMonthFontFamily: 'Mx437',
        textDayHeaderFontFamily: 'Mx437',

        textDayFontSize: 19,
        textMonthFontSize: 22,
        textDayHeaderFontSize: 18,

        calendarBackground: '#000',
        dayTextColor: '#fff',
        monthTextColor: '#fff',
        
    },
  
  });



LocaleConfig.locales['Sp'] = {
  monthNames: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ],
  monthNamesShort: ['Ene.', 'Feb.', 'Marz.', 'Abr.', 'Mai', 'Jun.', 'Jul.', 'Ag.', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
  dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
  dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
  today: "Hoy"
};
LocaleConfig.defaultLocale = 'Sp';





export default CalendarComponent;