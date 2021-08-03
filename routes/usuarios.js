const express = require('express')
const route = express.Router()
// const { getUsuarios, postUsuarios, putUsuarios, deleteUsuarios } = require('../controllers/usuarios')
const usuarios = require('../controllers/usuarios')
const { check } = require('express-validator')


// Consulta endpoints desde el controlador
route.get('/', usuarios.getUsuarios)
route.post('/', [ check('correo', 'El formato del correo ingresado no es valido').isEmail()], usuarios.postUsuarios)
route.put('/', usuarios.putUsuarios)
route.delete('/', usuarios.deleteUsuarios)
route.get('/consultarUsuario/:id', usuarios.consultarUsuario)
route.post('/agregarUsuario', usuarios.agregarUsuario)



module.exports = route