const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title : { type: String, default: ""},
    images : [{type : String}],
    price : {type: Float64Array},
    description : { type: String, default: ""},
    type : { type: String, default: ""},
    isPersonal : { type: Boolean , default : true},
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    addess: { type: mongoose.Schema.Types.ObjectId, ref: 'Addess'},
    createdAt :  { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
},{collection: "Product"})

const productModel = mongoose.model('Product', productSchema );

module.exports = productModel;