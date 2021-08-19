const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const addessSchema = new Schema ({
    city : { type: String, default : ''},
    district : { type: String, default : ''},
    wards: { type: String, default : ''},
    streets: { type: String, default : ''}
},{collection : 'Addess'})

const addessModel = mongoose.model('Addess', addessSchema)

module.exports = addessModel;