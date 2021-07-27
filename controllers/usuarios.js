const { response } = require('express')


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


module.exports = {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  deleteUsuarios
}