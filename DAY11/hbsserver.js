import express from "express";

let app = express()

import path from "path"

app.get("/hello",(req,res)=>{
    res.sendFile("C:\\Users\\IET\\Desktop\\class files\\classwork\\WPT\\DAY11\\test.html")
})

app.get("/verify",(req,res)=>{
    let user=req.query.uname
    let pwd=req.query.pwd

    if(user=="iet" && pwd=="123"){
         res.sendFile("C:\\Users\\IET\\Desktop\\class files\\classwork\\WPT\\DAY11\\welcome.html")
         alert("welcome")
    }
    else{
        res.sendFile("C:\\Users\\IET\\Desktop\\class files\\classwork\\WPT\\DAY11\\test.html")
        // alert("wrong details please fill again")
    }
})
app.listen(2000,()=>{
    console.log("server is listening on 2000")
})