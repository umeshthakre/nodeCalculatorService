require('dotenv').config
const express = require('express');
const app = express();

app.use(express.json());

app.post("/",(req,res)=>{

})


app.listen(process.env.PORT,(req,res)=>{
    console.log("running on "+process.env.PORT)
})