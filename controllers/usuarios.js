const { response } = require('express')

// Ejemplo de BD
let arrayUsuarios = [
  {id:1, nombre: 'Mateo'},
  {id:2, nombre: 'León'},
  {id:3, nombre: 'Rodofo'}
]


const getUsuarios = (req, res = response) => {
  res.json({
    error: false,
    msg: 'getUsuarios - controllers'
  })
}

const postUsuarios = (req, res = response) => {
  res.json({
    error: false,
    msg: 'postUsuarios - controllers'
  })
}

const putUsuarios = (req, res = response) => {
  res.json({
    error: false,
    msg: 'putUsuarios - controllers'
  })
}

const deleteUsuarios = (req, res = response) => {
  res.json({
    error: false,
    msg: 'deleteUsuarios - controllers'
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
      // 400 bad request
      res.status(400).json({
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