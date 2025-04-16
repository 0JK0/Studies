import { Text, View } from "react-native";

import MainScreen from '../src/MainScreen'
import { useCallback, useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { useFocusEffect } from "expo-router";

type userType =  {id: Number; name: String; password:String};
export default function Index() {

  const [data, setData] = useState <userType[]> ([])

  const database = useSQLiteContext();

  const loadData = async () => {

    const result = await database.getAllAsync<userType>(`SELECT * FROM users;`)
    setData(result);

  };

  useFocusEffect(
    useCallback(() => {

      loadData();
    }, [])

  );
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      

      <MainScreen />
    </View>
  );
}
