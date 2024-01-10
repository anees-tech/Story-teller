import mongoose from 'mongoose';
import {dbName} from '../constantVars.js'


const dbConnect = async () => {
   try {
    const dataBaseConnection = await mongoose
    .connect(`${process.env.DB_URI}/${dbName}`, {
    }).then((data)=>{
        console.log("dataBase is Connected ")
    })
    const db = mongoose.connection;
    console.log(db.models)
} catch (error) {
    console.log(`Database Connection Failed ` + error);
   }

}


export default dbConnect