const express = require('express')
const app = express()
const usuarios = require('./routes/router_usuarios')
const morgan = require('morgan')
const login = require('./middleware/login')
const autenticated = require('./middleware/auntenticated')
require('dotenv').config()
const port = process.env.PORT || 4000

//? Uso de moddlewere propios de Express
app.use(express.json()) // hace que express tome el body del request para que venga en formato json
app.use(express.urlencoded({extended: true})) // para que lea los parametros recibidos en JSON
//? Uso de moddlewere personalizados
app.use(login)
app.use(autenticated)
// (rutas) Cuando express reciba la peticion de la ruta usuarios, invocara al router de usuarios
app.use('/usuarios', usuarios)
//? Uso de moddlewere de Terceros (npm)
app.use(morgan('tiny')) // muestra en consola el registro de la peticion,el estatus y el tiempo en ml video 73

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
