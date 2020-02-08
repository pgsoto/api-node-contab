const ctrl = {}

const { Cliente } = require('../models')

ctrl.index = async(req, res) => {
    console.log('listar clientes')
    Cliente.find({estado: true})
        .exec((err, clientes) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                clientes
            })
        })
}

ctrl.insert = async(req, res) => {
    console.log('insertar cliente')
    let body = req.body

    let cliente = new Cliente({
        rut: body.rut,
        nombre: body.nombre,
        domicilio: body.domicilio,
        telefono: body.telefono,
    })

    cliente.save((err, clienteDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        res.status(201).json({
            ok: true,
            cliente: clienteDB
        })

    })
}

ctrl.updater = async(req, res) => {

    let id = req.params.id
    let body = req.body

    Cliente.findById(id, (err, clienteDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!clienteDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }
            })
        }

        clienteDB.nombre = body.nombre
        clienteDB.domicilio = body.domicilio
        clienteDB.telefono = body.telefono
        clienteDB.updated_at = Date.now()

        clienteDB.save((err, clienteGuardado) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                cliente: clienteGuardado
            })
        })
    })
}

// ===========================
//  Borrar un producto
// ===========================
ctrl.deleter = async(req, res) => {

    let id = req.params.id

    Cliente.findById(id, (err, clienteDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if (!clienteDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'ID no existe'
                }
            })
        }

        clienteDB.estado = false
        clienteDB.deleted_at = Date.now()

        clienteDB.save((err, borrado) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                cliente: borrado,
                mensaje: 'Cliente borrado'
            })
        })
    })
}

module.exports = ctrl