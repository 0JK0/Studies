import { useSQLiteContext } from "expo-sqlite";

export async function checkExists(name:string,db:any): Promise<boolean> {

    try{

        const result = await db.getAllAsync<{count: number}>(

            `SELECT COUNT(*) as count FROM users WHERE name = ?;`, [name]
    
        );

        return result[0].count > 0;

    } catch(error) {

        console.error(error)
        return false;
    }

    
}

export async function registerUser(name:string,password:string,image:string,db:any) {

    console.log(`registerUser, Recived: ${name} - ${password}` )

    try{

        await db.runAsync(`INSERT INTO users (name,password,image) VALUES (?,?,?)`,[name,password,image]);
        console.log("registerUser Ran successfully");
        alert("User Registered Sucessfully")

        const users = await db.getAllAsync("SELECT * FROM users");
        console.log("All users:", users);



    }catch(error){

        console.error(error)

    }
    
}
