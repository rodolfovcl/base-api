const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
  nombre: {
    type: 'string',
    required: [true, 'El nombre es obligatorio']
  },
  correo: {
    type: 'string',
    required: [true, 'El correo es obligatorio'],
    unique: true
  },
  contrasenia: {
    type: 'string',
    required: [true, 'La contrasenia es obligatoria']
  },
  imagen: {
    type: 'string'
  },
  rol: {
    type: 'string',
    required: true,
    emun: ['ADMIN_ROLE', 'USER_ROLE']
  },
  activo: {
    type: 'boolean',
    default: true
  },
  google: {
    type: 'boolean',
    default: false
  }
})



module.exports = model('Usuario', UsuarioSchema)