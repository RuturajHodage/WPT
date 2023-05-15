import express from "express"

let app = express()

import productrouter from "./productrouter.js"
app.use("/product",productrouter)

app.listen(2000,()=>{
    console.log("the server runs on 2000")
})


