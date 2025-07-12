console.log("bhuwan");
const express=require("express");
const app=express();


// now in the Current Scenario the request is directly going the routes 
app.use(function(req,res,next){
    console.log("let me do some authentiation first");
    next();
    // after here it will go to the next route now 
})

app.get("/",function(req,res){
    console.log("so yu came to the / page finally")
    res.send("hello to the home page")
})

app.get("/about",function(req,res){
    console.log("you came to the ABout page alright")
})

// now we have to start server at any port 
app.listen(3000);