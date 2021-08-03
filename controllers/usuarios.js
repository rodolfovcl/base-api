const { response } = require('express')
const Usuario = require('../models/usuario')
const bcryptjs = require('bcryptjs')
const {validationResult} = require("express-validator");

// Ejemplo de BD
let arrayUsuarios = [
  {id:1, nombre: 'Mateo'},
  {id:2, nombre: 'León'},
  {id:3, nombre: 'Rodofo'}
]


const getUsuarios = (req, res = response) => {
  const params = req.params
  const query = req.query
  res.json({
    error: false,
    msg: 'getUsuarios - controllers',
    params,
    query
  })
}

const postUsuarios = async (req, res = response) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json(errors)
  }

  const { nombre, correo, contrasenia, rol } = req.body
  const usuario = new Usuario({nombre, correo, contrasenia, rol})

  // Verificar si correo existe
  const existeCorreo = await Usuario.findOne({correo})
  if (existeCorreo) {
    return res.status(400).json({mns: "El correo ya esta registrado"})
  }

  // Encriptar contraseña
  const salt = bcryptjs.genSaltSync()
  usuario.contrasenia = bcryptjs.hashSync(contrasenia, salt)
  // Guardar en BD
  await usuario.save()
  res.json({
    msg: 'postUsuarios - controllers',
    usuario
  })
}

const putUsuarios = (req, res = response) => {
  // console.log('req.body: ', req.body)
  res.json({
    error: false,
    msg: 'putUsuarios - controllers',
    nombre: req.body.nombre
  })
}

const deleteUsuarios = (req, res = response) => {
  const body = req.body
  res.json({
    error: false,
    msg: 'deleteUsuarios - controllers',
    body
  })
}

const consultarUsuario = (req, res= response) => {
  let usuario = arrayUsuarios.find(user => user.id === parseInt(req.params.id))
  if (!usuario) res.status(404).send('El usuario no fue encontrado')
  res.json({
    error: false,
    usuario
  })
}

const agregarUsuario = (req, res = response) => {
    if (!req.body.nombre){
      res.status(400).json({ // 400 bad request
        error: true,
        msg: 'Debe ingresar un nombre'
      })
      return
    }
    const nuevoUsuario = {
      id: arrayUsuarios.length + 1,
      nombre: req.body.nombre
    }
    arrayUsuarios.push(nuevoUsuario)
    res.send(arrayUsuarios)
}


module.exports = {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  deleteUsuarios,
  consultarUsuario,
  agregarUsuario
}