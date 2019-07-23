const mongoose = require('mongoose');
const User = require("./models/User");
const Product = require("./models/Product");
const News = require("./models/News");
const Forums = require("./models/Forums");

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
    getUsers(res){
        //en el modelo User se ejecuta el find sin ninguna condicion...
        User.find({}, (err, users)=>{
        //en caso de haberse presentado un error se ejecuta el error
            if(err) throw err;
        //de lo contrario se retorna un objeto con todos los resultados
            res.send( users );
        })
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




 getProducts(res){
        Product.find({}, (err, products)=>{
            if(err) throw err;
            res.send( products );
        })
    }

    postProducts(req, res){
        let products = req.body.products;
        Product.create( products, (err, result)=>{
            if(err)throw err;
            res. send({newProducts:result})
        })
    }


getNews(res){
        News.find({}, (err, news)=>{
            if(err) throw err;
            res.send( news );
        })
    }

    postNews(req, res){
        let news = req.body.news;
        News.create( news, (err, result)=>{
            if(err)throw err;
            res. send({newNews:result})
        })
    }

getForums(res){
        Forums.find({}, (err, forums)=>{
            if(err) throw err;
            res.send( forums );
        })
    }

postForums(req, res){
        let forums = req.body.forums;
        Forums.create( forums, (err, result)=>{
            if(err)throw err;
            res. send({newForums:result})
        })
    }




}
exports.controller = new Controller();