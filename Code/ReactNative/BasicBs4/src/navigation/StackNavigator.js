import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import NewNoteScreen from '../screens/NewNoteScreen';
import GoUserSettings from '../components/PfpButton';
import SettingsScreen from '../screens/SettingsScreen';
import SigInScreen from '../screens/SignInScren';


const Stack = createNativeStackNavigator();

export default function RootStack(){


    return(

        <Stack.Navigator initialRouteName='Login'>

            <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{headerShown: false}} 
                
            />

            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    headerShown: true,
                    title:"",
                    headerRight: () => <GoUserSettings />
                
                }} 
            />

            <Stack.Screen 
                name="NewNote" 
                component={NewNoteScreen} 
                options={{headerShown: false}} 
            />

            <Stack.Screen 
                name="Settings" 
                component={SettingsScreen} 
                options={{headerShown: false}} 
            />

            <Stack.Screen 
                name="SigIn" 
                component={SigInScreen} 
                options={{headerShown: false}} 
            />



        </Stack.Navigator>


    );

}

