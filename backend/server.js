import express from 'express';
import authRoutes from '../backend/routes/auht.routes.js'
import messagesRoutes from '../backend/routes/message.routes.js'
import userRoutes from '../backend/routes/user.routes.js'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDb.js';
import {app,server} from './socket/socket.js'
import path from "path"
dotenv.config();
// const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json())
app.use(cookieParser());
app.use('/api/auth',authRoutes);
app.use('/api/messages',messagesRoutes);    
app.use('/api/users',userRoutes);    
app.use(express.static(path.join(__dirname,"/frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

// app.get('/',(req,res)=>{
//     //root route
//     res.send("Hello world2");
// })



server.listen(PORT,()=>{ 
    connectToMongoDB();
    console.log("Listening on port 5000")

});