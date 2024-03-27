const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "name":String,
    "userId":String,
    "accessToken":String
})

const userModel = mongoose.model("userData",userSchema);

module.exports = userModel;