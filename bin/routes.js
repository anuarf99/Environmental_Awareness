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



app.get("/products", (req, res) =>{

    controller.getProducts(res);

})

app.post("/products", (req, res)=>{
    //console.log(req.body);
    controller.postProducts(req, res);
})

app.get("/news", (req, res) =>{

    controller.getNews(res);

})

app.post("/news", (req, res)=>{
    //console.log(req.body);
    controller.postNews(req, res);
})


app.get("/forums", (req, res) =>{

    controller.getForums(res);

})

app.post("/forums", (req, res)=>{
    //console.log(req.body);
    controller.postForums(req, res);
})



exports.app = app;