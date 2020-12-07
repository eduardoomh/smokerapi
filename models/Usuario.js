const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    nombre: {
        type: String,
        require: true
    },
    apellidos: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    nombre_usuario: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    contrasena: {
        type: String,
        require: true,
        trim: true
    },
    imagen: {
        type: String,
        trim: true,
        default: null
    },
    descripcion: {
        type: String,
        trim: true,
        default: null
    },
    personajes: [
        {
            type: Schema.Types.ObjectId,
            require: false,
            ref: "Personaje",
        }
    ],
    redes_sociales: [
        {
            nombre: {type: String, default: null},
            url: {type: String, default: null},
            icono: {type: String, default: null}
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Usuario", UserSchema);