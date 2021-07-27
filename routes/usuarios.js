const express = require('express')
const route = express.Router()
const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios } = require('../controllers/usuarios')


let usuarios = [
  {id:1, nombre: 'Mateo'},
  {id:2, nombre: 'León'},
  {id:3, nombre: 'Rodofo'}
]

// Consulta endpoints desde el controlador
route.get('/', getUsuarios)
route.post('/', postUsuarios)
route.put('/', putUsuarios)
route.delete('/', deleteUsuarios)


// Consulta usuario por id
route.get('/:id', (req, res) => {
  let usuario = usuarios.find(user => user.id === parseInt(req.params.id))
  if (!usuario) res.status(404).send('El usuario no fue encontrado')
  res.send(usuario)
})

// Nuevo usuario
route.post('/', (req, res) => {
  if (!req.body.nombre){
    // 400 bad request
    res.status(400).send('Debe ingresar un nombre')
    return
  }
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre
  }
  usuarios.push(nuevoUsuario)
  res.send(usuarios)
})

module.exports = route