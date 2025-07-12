const fs=require("fs");
fs.writeFile("bhuwan.txt","hello from bhuwan",function(err){
    if(err) console.log("there is error while maing file");
    else{
        console.log("file created SuccessFully")
    }
})

