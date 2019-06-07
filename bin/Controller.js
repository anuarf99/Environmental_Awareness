const mongoose = require('mongoose');
const User = require("./models/User");

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
}
exports.controller = new Controller()