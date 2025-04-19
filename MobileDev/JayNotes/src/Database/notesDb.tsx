import { useSQLiteContext } from "expo-sqlite";

export async function saveNewNote(date:string,title:string,body:string,noteType:string,userId:number,db:any, ) {

    console.log("----Save New Note Starts---")
    console.log(`Recived: ${date} - ${title} - ${body} - ${userId}` )

    try{

        await db.runAsync(`INSERT INTO notes (date,title,body,noteType,userId) VALUES (?,?,?,?,?)`,[date,title,body,noteType,userId]);
        alert("Noted Saved Succefully")

        const notes = await db.getAllAsync("SELECT * FROM notes");
        console.log("All notes: ",notes);



    }catch(error){

        console.error("=== ERROR SaveNewNote: ",error)

    }
    
}