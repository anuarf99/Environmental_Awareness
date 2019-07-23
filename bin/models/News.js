const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    name: String,
    date: String,
    country: String,
    views: Number
});

var News = mongoose.model("News", NewsSchema);
module.exports = News;