const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const usuarios = require('./routes/usuarios')
const login = require('./middleware/login')
const autenticated = require('./middleware/auntenticated')
require('dotenv').config()
const port = process.env.PORT || 4005


//? MIDDLEWARES
// Uso de mddleware propios de Express
app.use(express.json()) // hace que express tome el body del request para que venga en formato json
app.use(express.urlencoded({extended: true})) // para que lea los parametros recibidos en JSON

// Uso de moddlewere de Terceros (npm)
app.use(morgan('tiny')) // muestra en consola el registro de la peticion,el estatus y el tiempo en ml video 73
app.use(cors())

// Uso de moddlewere personalizados
app.use(express.static('public')) // Equivale al ruteo de home ('/')
app.use(login)
app.use(autenticated)

app.post('/login', (req, res) => {
  let username = req.body.user
  let password = req.body.pass
  res.send(`Bienvenido ${username}, tu contraseña es: ${password}`)
})


//? RUTAS (ENDPOINTS)
app.use('/api/usuarios', usuarios) //Cuando express reciba la peticion de la ruta usuarios, invocara al router de usuarios



app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`)
})
