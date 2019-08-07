const mongoose = require('mongoose');
const User = require("./models/User");
const News = require("./models/News");
const Forums = require("./models/Forums");
const Products = require("./models/Products");

class Controller{
    constructor(){
        this.connect();
    }
    async connect(){
        try{
            await mongoose.connect(
              "mongodb+srv://anuarf:EYKWjG6D3KFyxpR@cluster0-vquuk.mongodb.net/Machine-of-Time?retryWrites=true&w=majority",
               {useNewUrlParser:true}
             );
             console.log("Conectado a la Base de Datos")
        } catch(e){
            console.error(e)
        }
    }

        //metodo para buscar todos los usuarios
    getUsers(req, res){
        //en el modelo User se ejecuta el find sin ninguna condicion...
        User.find({}, (err, users)=>{
        //en caso de haberse presentado un error se ejecuta el error
            if(err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
            res.send({ allUsers: users });
        })
    }

    getUser(id, res) {
    //en el modelo User se ejecuta el find sin ninguna condicion...
    User.find({ _id: id }, (err, user) => {
      //en caso de haberse presentado un error se ejecuta el error
      if (err) throw err;
      //de lo contrario se retorna un objeto con todos los resultados
      res.send({ User: user });
    });
  }

    postUsers(req, res){
        //en el modelo User se ejecuta el find sin ninguna condicion...
        let users = req.body.users;
        //en caso de haberse presentado un error se ejecuta el error
        User.create( users, (err, result)=>{
        //de lo contrario se retorna un objeto con todos los resultados
            if(err)throw err;
            res. send({newUsers:result})
        })
    }

    updateUser(user, res) {
    //optenemos los campos que queremos actualizar
    let { id, nickname, password, picture } = user;
    //actualizamos teniendo en cuenta una condicion con el operador $set
    //https://docs.mongodb.com/manual/reference/operator/update/set/
    User.updateOne(
      { _id: id },
      { $set: { picture: picture, password: password, nickname:nickname } }
    )
      .then(rawResponse => {
        res.send({ message: "User updated", raw: rawResponse });
      })
      .catch(err => {
        if (err) throw err;
      });
  }


    deleteUser(id, res) {
    User.deleteOne({ _id: id }, function(err) {
      if (err) throw err;
      res.send({ message: "User has been deleted" });
    });
  }



    getForums(req, res){
        Forums.find({}, (err, forums)=>{
            if(err) throw err;
            res.send({ allForums: forums });
        })
    }

    getForum(id, res) {
    Forums.find({ _id: id }, (err, newss) => {
      if (err) throw err;
      res.send({ Forum: forum });
    });
  }

    postForums(req, res){
        let forums = req.body.forums;
        Forums.create( forums, (err, result)=>{
            if(err)throw err;
            res. send({newForums:result})
        })
    }

    updateForums(forums, res) {
    let { id, thematic } = forums;
    News.updateOne(
      { _id: id },
      { $set: { thematic: thematic } }
    )
      .then(rawResponse => {
        res.send({ message: "Forums updated", raw: rawResponse });
      })
      .catch(err => {
        if (err) throw err;
      });
  }


    deleteNews(id, res) {
    Forums.deleteOne({ _id: id }, function(err) {
      if (err) throw err;
      res.send({ message: "This News has been deleted" });
    });
  }


getProducts(req, res){
        Products.find({}, (err, products)=>{
            if(err) throw err;
            res.send({ allProducts: products });
        })
    }

    getProduct(id, res) {
    Products.find({ _id: id }, (err, product) => {
      if (err) throw err;
      res.send({ Product: product });
    });
  }

    postProducts(req, res){
        let products = req.body.products;
        Products.create( products, (err, result)=>{
            if(err)throw err;
            res. send({newProducts:result})
        })
    }

    updateProducts(user, res) {
    let { id, name, date, place_of_creation, type, route } = user;
    Products.updateOne(
      { _id: id },
      { $set: { name: name, date: date, place_of_creation: place_of_creation, type: type, route: route } }
    )
      .then(rawResponse => {
        res.send({ message: "User updated", raw: rawResponse });
      })
      .catch(err => {
        if (err) throw err;
      });
  }


    deleteProducts(id, res) {
    Products.deleteOne({ _id: id }, function(err) {
      if (err) throw err;
      res.send({ message: "Products has been deleted" });
    });
  }


}
exports.controller = new Controller();