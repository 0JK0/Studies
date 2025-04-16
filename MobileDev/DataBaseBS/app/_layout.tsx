import { Stack } from "expo-router";
import { SQLiteProvider,SQLiteDatabase } from "expo-sqlite";

export default function RootLayout() {


  const createDbIfNeeded = async(db: SQLiteDatabase) => {

    console.log("Creating Database if needed");

    await db.execAsync(

      `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, password TEXT);`

    );


  }

  return ( 
    <SQLiteProvider databaseName="test.db" onInit={createDbIfNeeded}>
        <Stack />
    </SQLiteProvider>
    
  
  );
}
