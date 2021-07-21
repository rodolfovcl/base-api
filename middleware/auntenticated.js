const autenticated = (req, res, next) => {
  console.log('Autenticando usuario...')
  next()
}
module.exports = autenticated