const express = require('express');
const app = express();
const {controller} = require("./Controller");
const bodyParser = require("body-parser");

app.use( bodyParser.json() );

app.get("/", (req, res) =>{
    res.send("Hola Mundo");
})

app.get("/users", (req, res) =>{

    controller.getUsers(res);

})

app.post("/users", (req, res)=>{
    //console.log(req.body);
    controller.postUsers(req, res);
})


exports.app = app;