import {View, TextInput, StyleSheet,FlatList,Text} from 'react-native'
import { useCallback, useEffect, useState } from "react";

import { useSQLiteContext } from 'expo-sqlite';
import { useFocusEffect } from "expo-router";

import CustomButton from './button'
import NoteCard from './Card'


export default function MainScreen(){
    type userType =  {id: Number; name: String; password:String};

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [data, setData] = useState <userType[]> ([])
    

    const database = useSQLiteContext();
  
    const loadData = async () => {
  
      const result = await database.getAllAsync<userType>(`SELECT * FROM users;`)
      setData(result);
      console.log("Fetched users:", result);
  
    };
  
    useFocusEffect(
      useCallback(() => {
  
        loadData();
      }, [])
  
    );

    async function showTable  () {
        
        const result = await database.getAllAsync(`PRAGMA table_info(users);`);
        console.log("TABLE SCHEMA:", result);
    }

    async function checkExists(name: string): Promise<boolean> {
        const result = await database.getAllAsync<{ count: number }>(
            `SELECT COUNT(*) as count FROM users WHERE name = ?;`,
            [name]
          );
          
          return result[0].count > 0;
          
    }

    async function validateCredentials(name: string, password: string): Promise<boolean> {
        const result = await database.getAllAsync(
            `SELECT * FROM users WHERE name = ? AND password = ?`,
            [name, password]
        );
    
        return result.length > 0;
    }

    const tryLogin = async () => {
        const isValid = await validateCredentials(name, password);
    
        if (isValid) {
            console.log("Login successful!");
            // Proceed to app, set user context, navigate, etc.
        } else {
            console.warn("Login failed: Invalid username or password");
            // Show feedback to user
        }
    };
    
    
    
    
    const sendToDb = async() => {

        const exists = await checkExists(name);
    
        if (exists) {
            console.warn("Name already exists in the database. Aborting insert.");
            return;  
        }

        console.log(`Username: ${name} Password: ${password}`);
        try{

            database.runAsync(`INSERT INTO users (name, password) VALUES (?,?)`, [name,password]);

        } catch(error) {

                console.error(error)
        }

        loadData();
        showTable();


        

    }

    return(
        <View style={styles.Container}>

            <TextInput 
                style={styles.TextInput} 
                placeholder='Name' 
                placeholderTextColor='#c6c3c3'

                value = {name}
                onChangeText={setName}

            />

            <TextInput 
                style={styles.TextInput} 
                placeholder='Password' 
                placeholderTextColor='#c6c3c3'

                value = {password}
                onChangeText={setPassword}
            />

            <CustomButton
                onPress = {sendToDb}
                buttonText={'SUBMIT'}
                altura = {50}
                anchura ={100}
                fontSize={20}
            />

            <FlatList data={data}  keyExtractor={(item) => item.id.toString()} renderItem={({item}) => (

                <NoteCard

                    Tittle={item.name}
                    Date={item.password}
                    NoteType={'video'}
                    onPress={null}

                />



            )}/>
            

        </View>

    )

}

const styles = StyleSheet.create ({

    Container: {

        width:'100%',
        height:'100%',

        backgroundColor: '#000'

    },

    TextInput: {

        color:'#fff',

        borderWidth: 2,
        borderColor:'#fff',
        borderRadius:15,
        
        fontSize:20,

        margin:10,


    },

    FlatList: {
        
        margin:20,
    },

    Text:{

        color:'#fff',
        fontSize: 20,
    },


})

/* const DISPLAY_LIMIT = 10;

const loadData = async () => {
    const result = await database.getAllAsync<userType>(
      `SELECT * FROM users ORDER BY id DESC LIMIT ?;`, [DISPLAY_LIMIT]
    );
    setData(result.reverse());
  };
   */