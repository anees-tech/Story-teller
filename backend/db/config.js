import mongoose from 'mongoose';
import {dbName} from '../constantVars.js'


const dbConnect = async () => {
   try {
    const dataBaseConnection = await mongoose
    .connect(`${process.env.DB_URI}/${dbName}`, {
    }).then(()=>{
        console.log("dataBase is Connected ")
    })
   } catch (error) {
    console.log(`Database Connection Failed ` + error);
   }
}


export default dbConnect