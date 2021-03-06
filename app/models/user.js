var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    password: {type: String, select: false}
});

module.exports = mongoose.model("User", UserSchema);