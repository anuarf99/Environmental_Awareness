const express = require('express');
const app = express();
const {controller} = require("./Controller");

app.get("/", (req, res) =>{
    res.send("Hola Mundo");
})

app.get("/users", (req, res) =>{

    controller.getUsers(res);
    
})


exports.app = app;