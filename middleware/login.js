function login (req, res, next) {
  console.log('Logeando usuario...')
  if (req.body.nombre) next()
}
module.exports = login