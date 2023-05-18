import express from "express";

let app=express()

app.get('/',(request,response)=>{
    return response.send("hi this is from BATMAN")
});

app.get("/heyhii",(request,response)=>{
     return response.send("heyy")
});

app.listen(3000 , ()=>{
       console.log("app is listening on port 3000")
});

