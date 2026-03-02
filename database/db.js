import mongoose from "mongoose"

const connectDB = async ()=>{
    try {

        await mongoose.connect(process.env.MONGO_URI, {dbName: "Ib_Dev"})
        console.log("MongoDB Connected Successfully")
        
    } catch (error) {

        console.log(`MongoDb Connection err ${error}`)
        
    }
}


export default connectDB;