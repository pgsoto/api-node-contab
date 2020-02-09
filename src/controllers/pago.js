const ctrl = {}

const { Pago } = require('../models')

ctrl.index = async(req, res) => {
    console.log('listar pago iva por pago')

    let id = req.params.cliente;

    await Pago.find({cliente : id})
        .sort({ timestamp: -1 })
        .populate('pago', 'rut nombre')
        .exec((err, pagos) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                })
            }

            res.json({
                ok: true,
                pagos
            })
        })
}

ctrl.insert = async(req, res) => {
    let body = req.body

    let pago = new Pago({
        cliente: body.cliente,
        tipo: body.tipo,
        fecha: body.fecha
    })

    await Pago.findOne({cliente:body.cliente, tipo:body.tipo, fecha:body.fecha}, (err, result) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            })
        }

        if (result) {
            res.status(400).json({
                status: 'error',
                message: 'Pago ya existe',
              })
        } else{
            pago.save((err, pagoDB) => {
                if (err) {
                    res.status(500).json({
                        ok: false,
                        err
                    })
                }
        
                res.status(201).json({
                    ok: true,
                    pago: pagoDB
                })
            })
        }
    })
}


module.exports = ctrl