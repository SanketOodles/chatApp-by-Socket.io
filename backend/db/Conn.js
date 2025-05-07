import mongoose from 'mongoose';

const ConnectDB=async(MONGO_URL)=>{
    try {
    await mongoose.connect(MONGO_URL)
    console.log("Database is connect")
    } catch (error) {
        console.log(error)
    }
}
export default ConnectDB;