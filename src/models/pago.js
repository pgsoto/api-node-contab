const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;

const schema = new Schema({
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente', required: true },
    // estado: { type: Boolean, required: true, default: true },
    tipo: { type: String, required: "Tipo de pago es obligatoria" },
    fecha: { type: Date, unique: false, required: "Fecha es obligatoria" },
    timestamp: { type: Date, default: Date.now }
});

// schema.plugin(uniqueValidator);

module.exports = mongoose.model('Pago', schema);