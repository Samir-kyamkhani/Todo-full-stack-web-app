import mongoose from "mongoose";
import {DB_NAME} from '../constants.js'

const dbConnection = async () => {
    try {
        const connectionInctence = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Db Connection Successfully :: ${connectionInctence.connection.host}`)
    } catch (error) {
        console.log(`Db Connection failed :: ${error}`)
    }
}

export default dbConnection