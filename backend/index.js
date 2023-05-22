const bodyParser = require('body-parser');
const express = require('express');
const connectDb = require('./config/db.js');
const router=require('./routes/routes');
const app=express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(router);
// app.get('/', (req,res)=>res.send("Testing server"));

//Connect to Database
connectDb();

//Start Server

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on ${port}`));