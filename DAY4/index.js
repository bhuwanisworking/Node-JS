const express=require("express");
const path=require("path")

const app=express();
//console.log(__dirname)

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"Public")))
app.set("view engine","ejs")

app.use(function(req,res,next){
    console.log("middleware is called ")
    next()
})

app.get("/user/:name",function(req,res){
    res.send(`welocme ${req.params.name}`);
})
app.get("/file",function(req,res){
    console.log("will show the file ")
    res.render("bhuwan")
})

app.listen(3000,function(res,err){
    console.log("server started")
})