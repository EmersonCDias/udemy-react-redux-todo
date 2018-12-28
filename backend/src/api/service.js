const Todo = require('./model')

Todo.methods(['get', 'post', 'delete', 'put'])
Todo.updateOptions({new: true, runValidator: true})

module.exports = Todo