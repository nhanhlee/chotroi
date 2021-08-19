const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name : { type: String, default : ""},
    parent : { type: mongoose.Schema.Types.ObjectId , default : null},
    createdAt :  { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }

},{collection: 'Category'})

const categoryModel = mongoose.model('Category',categorySchema)

module.exports = categoryModel;