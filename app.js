
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
require('dotenv').config()
// mid ware
app.use(express.static('./public'))
app.use(express.json());

// route 


app.use('/api/v1/tasks', tasks);
const port = 3000;
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on the port ${port}`));
    } catch(error){
        console.log(error);
    }
}


start();