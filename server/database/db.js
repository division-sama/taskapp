import mongoose from "mongoose";


const Connection = async (username,password) => {

const URL = `mongodb://${username}:${password}@ac-h3r58ox-shard-00-00.8wxu6sx.mongodb.net:27017,ac-h3r58ox-shard-00-01.8wxu6sx.mongodb.net:27017,ac-h3r58ox-shard-00-02.8wxu6sx.mongodb.net:27017/?ssl=true&replicaSet=atlas-jv7h2c-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("database is connected")
    } catch (error) {
        console.log(`Error -  ${error}`);
    }
}

export default Connection;