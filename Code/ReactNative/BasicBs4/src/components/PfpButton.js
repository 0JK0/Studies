import { Header } from '@react-navigation/elements';
import {Pressable,View,Text,Animated } from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { useState } from "react"
import { StyleSheet } from 'react-native';

const GoUserSettings = () => {

    const navigation = useNavigation();

    return (

        <View style={styles.Header}> 
            
        <PfPButton onPress={() => navigation.navigate('Settings')}/>
            
        </View>

    )


}


const styles = StyleSheet.create({

    Container:{

        alignItems: 'flex-start',

    }

})



const PfPButton = ({ onPress }) => {

    const[scale] = useState(new Animated.Value(1));

    const handlePressIn = () => {

        Animated.spring(scale, {

            toValue: 1.1,
            useNativeDriver: true,

        }).start();


    };

    const handlePressOut = () => {

        Animated.spring(scale, {

            toValue: 1,
            useNativeDriver: true,

        }).start();

    };


    return (

        <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>

        <Animated.View

            style={{

                transform: [{ scale }],

                backgroundColor: "#000",

                borderColor: "#fff",
                borderWidth: 2,
                borderRadius: 50,

                margin: 0,
                padding: 0,

                height: 55,
                width: 55,


            }}
        >

        </Animated.View>
        </Pressable>


    )

};
export default GoUserSettings;