const mongoose = require('mongoose');
const User = require("./models/User");
const Product = require("./models/Product");
const Person = require("./models/Person");


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




    getUsers(res){
        User.find({}, (err, users)=>{
            if(err) throw err;
            res.send( users );
        })
    }

    postUsers(req, res){
        let users = req.body.users;
        User.create( users, (err, result)=>{
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




getPersons(res){
        Person.find({}, (err, persons)=>{
            if(err) throw err;
            res.send( persons );
        })
    }

postPersons(req, res){
        let persons = req.body.persons;
        Person.create( persons, (err, result)=>{
            if(err)throw err;
            res. send({newPersons:result})
        })
    }


}
exports.controller = new Controller()