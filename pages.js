const express = require("express")
const { db } = require("./db")
const todoRoute = require("./app")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("./", express.static(__dirname + "/public_static"))
app.use("/todos", todoRoute)

db.sync().then(()=> {
    app.listen(6993)
}).catch((er)=>{
    console.log(err)
})