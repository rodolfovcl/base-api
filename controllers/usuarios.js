const { response } = require('express')

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

const postUsuarios = (req, res = response) => {
  console.log('req.body: ', req.body)
  res.json({
    error: false,
    msg: 'postUsuarios - controllers',
    nombre: req.body.nombre
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