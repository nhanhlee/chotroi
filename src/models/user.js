const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const constants = require('../common/Constants')

const userSchema = new Schema({
    name : { type : String, default : ""},
    email: { type : String, default: ""},
    role: { type : String, enum : ['user','admin'], default: constants.Role.User},
    hash: { type : String, default: ""},
    avatar: { type : String, default: ""},
    birth: { type: Date, default: Date.now },
    sex:  { type : String,enum : ['Male','Female'], default: "Male"},
    createdAt :  { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
},{collection: 'User'})

const userModel = mongoose.model('User',userSchema)



module.exports = userModel;





