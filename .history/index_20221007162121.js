require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.json());

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

app.get("/",(req,res)=>{
    return res.send({message:"node js calculator service"})
})


app.post("/",(req,res)=>{
    const {firstNum,secondNum,Operation} = req.body;
    let result = null;
    if(!firstNum || !secondNum ){
        return res.status(403).send({success:false,message:"please enter correct values of number"})
    }

    if(!isNumber(firstNum) || !isNumber(secondNum)){
        return res.status(403).send({success:false,message:"please enter correct values of numbers"})
    }
    console.log(typeof Operation);
    console.log(Operation);
    switch (Operation) {
        case "0":
            result = +firstNum+ +secondNum;
            break;
        case "1":
            result = +firstNum - +secondNum;
            break;
        case "2":
            result = +firstNum* +secondNum;
            break;
        default:
            return res.status(403).send({success:false,message:"please enter correct operation"});
            break;
    }

    return res.status(200).send({success:true,message:"operation performed successfully",result:result})

})


app.listen(process.env.PORT,(req,res)=>{
    console.log("running on "+process.env.PORT);
})