const express = require('express')

module.exports = server => {

    // API Routes
    const routes = express.Router()
    server.use('/api', routes)
    
    // TODO Routes
    const service = require('../api/service')
    service.register(routes, '/todos')

}