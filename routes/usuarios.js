const express = require('express')
const route = express.Router()
// const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios } = require('../controllers/usuarios')
const usuarios = require('../controllers/usuarios')


// Consulta endpoints desde el controlador
route.get('/', usuarios.getUsuarios)
route.post('/', usuarios.postUsuarios)
route.put('/', usuarios.putUsuarios)
route.delete('/', usuarios.deleteUsuarios)
// Consulta usuario por id
route.get('/consultarUsuario/:id', usuarios.consultarUsuario)
// Nuevo usuario
route.post('/agregarUsuario', usuarios.agregarUsuario)



module.exports = route