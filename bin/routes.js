const express = require('express');
const app = express();
const {controller} = require("./Controller");
const bodyParser = require("body-parser");

app.use( bodyParser.json() );

app.get("/", (req, res) =>{
    res.send("Hola Mundo");
})

app.get("/users", (req, res) =>{

    controller.getUsers(req, res);

})

app.post("/users", (req, res)=>{
    //console.log(req.body);
    controller.postUsers(req, res);
})

app.get("/users/:id", function(req, res) {
  let { id } = req.params;
  controller.getUser(id, res);
});
<<<<<<< HEAD
=======

app.put("/users/:id", function(req, res) {
  let user = req.body.user;
  user.id = req.params.id;
  controller.updateUser(user, res);
});


app.delete("/users/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteUser(id, res);
});
>>>>>>> 8dfe5b7673c4f43c16ea4cf662c512d7887a7aa3

app.put("/users/:id", function(req, res) {
  let user = req.body.user;
  user.id = req.params.id;
  controller.updateUser(user, res);
});


app.delete("/users/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteUser(id, res);
});


app.get("/news", (req, res) =>{

    controller.getNews(req, res);

})

app.post("/news", (req, res)=>{
    //console.log(req.body);
    controller.postNews(req, res);
})

app.get("/news/:id", function(req, res) {
  let { id } = req.params;
  controller.getNewss(id, res);
});

app.put("/news/:id", function(req, res) {
  let news = req.body.news;
  news.id = req.params.id;
  controller.updateNews(news, res);
});


app.delete("/news/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteNews(id, res);
});


app.get("/news", (req, res) =>{

    controller.getNews(req, res);

})

app.post("/news", (req, res)=>{
    //console.log(req.body);
    controller.postNews(req, res);
})

app.get("/news/:id", function(req, res) {
  let { id } = req.params;
  controller.getNewss(id, res);
});

app.put("/news/:id", function(req, res) {
  let news = req.body.news;
  news.id = req.params.id;
  controller.updateNews(news, res);
});


app.delete("/news/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteNews(id, res);
});


app.get("/forums", (req, res) =>{

    controller.getForums(req, res);

})

app.post("/forums", (req, res)=>{
    //console.log(req.body);
    controller.postForums(req, res);
})

app.get("/forums/:id", function(req, res) {
  let { id } = req.params;
  controller.getForum(id, res);
});

app.put("/forums/:id", function(req, res) {
  let forums = req.body.forums;
  forums.id = req.params.id;
  controller.updateUser(forums, res);
});


app.delete("/forums/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteForums(id, res);
});


app.get("/products", (req, res) =>{

    controller.getProducts(req, res);

})

app.post("/products", (req, res)=>{
    //console.log(req.body);
    controller.postProducts(req, res);
})

app.get("/products/:id", function(req, res) {
  let { id } = req.params;
  controller.getProduct(id, res);
});

app.put("/products/:id", function(req, res) {
  let products = req.body.products;
  products.id = req.params.id;
  controller.updateProducts(products, res);
});


app.delete("/products/:id", function(req, res) {
  let { id } = req.params;
  controller.deleteProducts(id, res);
});
exports.app = app;