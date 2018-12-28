const mongoose = require('mongoose') // É como se fosse o sequelize
mongoose.Promise = global.Promise // Apenas para tirar uma advertencia

module.exports = mongoose.connect('mongodb://localhost/todo')