const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : { type : String, default : ""},
    email: { type : String, default: ""},
    role: { type : String, default: ""},
    hash: { type : String, default: ""},
    avatar: { type : String, default: ""},
    birth: { type: Date, default: Date.now },
    sex:  { type : String, default: ""},
    createdAt :  { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
},{collection: 'User'})

const userModel = mongoose.model('User',userSchema)



module.exports = userModel;





