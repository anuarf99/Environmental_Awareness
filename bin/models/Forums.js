const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
    thematic: String,

});

var Forum = mongoose.model("Forum", ForumSchema);
module.exports = Forum;