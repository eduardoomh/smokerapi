const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonajeSchema = Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    apodo: {
        type: String,
        require: true,
        trim: true
    },
    imagen: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    organizacion: {
        type: String,
        require: true,
        trim: true,
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

module.exports = mongoose.model("Personaje", PersonajeSchema);