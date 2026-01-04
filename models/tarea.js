const mongoose = require('mongoose')
const { type } = require('os')
const { float } = require('webidl-conversions')

const {Schema} = mongoose
const schemaTarea = new Schema({
    titulo: { type: String, required: true},
    descripcion: {type: String, required: true}
})

module.exports = mongoose.model('Tarea', schemaTarea)
