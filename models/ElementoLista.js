const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElementoListaSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    apodo: {
        type: String,
        trim: true,
        default: null
    },
    imagen: {
        type: String,
        default: null
    },
    descripcion: {
        type: String,
        default: null
    },
    orden: {
        type: Number,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("ElementoLista", ElementoListaSchema);