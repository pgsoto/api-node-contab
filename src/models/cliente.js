const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;

const schema = new Schema({
    rut: { type: String, required: true, unique: true },
    nombre: { type: String, require: true  },
    domicilio: { type: String, require: false },
    telefono: { type: String, require: false },
    estado: { type: Boolean, required: true, default: true },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: false },
    deleted_at: { type: Date, required: false}
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model('Cliente', schema);