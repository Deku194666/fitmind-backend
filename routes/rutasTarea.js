const express = require('express')
const rutas = express.Router()
const Tarea = require ('../models/tarea')
const tarea = require('../models/tarea')
const { json } = require('body-parser')
const { console } = require('inspector')


rutas.get('/',async (req,res) => {
    const tareas = await Tarea.find()
    console.log(tareas)
    res.json(tareas)
})

rutas.get('/:id', async (req, res)=>{
    const tarea = await Tarea.findById(req.params.id)
    res.json(tarea)
})

rutas.post('/',async  (req, res)=>{
    const {titulo,descripcion} = req.body
    const tarea= new Tarea({titulo, descripcion,})
    console.log(tarea) 
    await tarea.save()
    res.json({status:'Tarea Guardada'}) 
}) 


rutas.put('/:id', async (req,res)=>{
    const {titulo,descripcion} = req.body
    const newTarea = {titulo,descripcion}
    await Tarea.findByIdAndUpdate(req.params.id,newTarea)
    res.json({status:'Tarea Actualizada'})
})

rutas.delete('/:id', async (req,res)=>{
    await Tarea.findByIdAndDelete(req.params.id)
    res.json({status:'Tarea Eliminada'})
})

module.exports = rutas

