import mongoose from "mongoose";
let isConnected=false;
export const connectToDB = async () =>{
    mongoose.set('strictQuery',true);
    if(isConnected){
        console.log('ypou are connected');
        return;
    }
    try{
        var a =process.env.MONGODB_URI
        await mongoose.connect(a,{
           
            dbName:'react-1stproject'
        })
        isConnected=true;
        console.log('reconnected')
    }
    catch(error){
        console.log(error);
    }
}