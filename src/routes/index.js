const express = require('express');
const router = express.Router();
const os = require('os');

// Controllers
const cliente = require('../controllers/cliente');
const pago = require('../controllers/pago');


// app.get('/', (req, res) => {
//     res.json({
//       ...req.headers,
//       hostname: os.hostname(),
//       date: new Date().toISOString()
//     })
// })

module.exports = app => {

    router.get('/', (req, res) => res.json({message: 'THE WORLD'}))

    router.get('/cliente', cliente.index)
    router.post('/cliente', cliente.insert)
    router.put('/cliente/:id', cliente.updater)
    router.delete('/cliente/:id', cliente.deleter)

    router.get('/pago/:cliente', pago.index)
    router.post('/pago', pago.insert)

    app.use(router)
}