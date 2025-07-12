console.log("bhuwan")
const express=require("express");
const app=express();

app.get("/",function(req,res){
    console.log("request cme in / route")
    res.send("welcome to the Home Page")
})

app.listen(3000);