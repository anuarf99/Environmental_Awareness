const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    date: String,
    place_of_creation: String,
    type: String,
    route: String
});

var Product = mongoose.model("Product", ProductSchema);
module.exports = Product;