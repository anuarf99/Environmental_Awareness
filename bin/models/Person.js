const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema = new Schema({
    name: String,
    last_name: String,
    country: String

});

var Person = mongoose.model("Person", PersonSchema);
module.exports = Person;