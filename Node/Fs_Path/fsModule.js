const fs = require("fs");

console.log("Start");

fs.writeFile("demo.txt","This is demo.txt",(err)=>{
    if(err) throw err;
    console.log("File Written");

    fs.readFile("demo.txt",(err,data)=>{
        if(err) throw err;
        console.log("Data : "+data.toString());
    });
});

console.log("End");