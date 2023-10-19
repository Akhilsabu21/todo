import express from 'express';
import env from 'dotenv';
import router from './router.js';
import connection from './connection.js'
import cors from 'cors';



const app=express();
app.use(cors())
env.config();
app.use(express.json())
app.use("/api",router)
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("SERVER CONNECTED");
    })
}).catch((error)=>{
    console.log(error);
})