const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactoSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },

    icono: {
        type: String,
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

module.exports = mongoose.model("Contacto", ContactoSchema);