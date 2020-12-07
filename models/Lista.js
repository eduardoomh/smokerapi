const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListaSchema = Schema({
    titulo: {
        type: String,
        require: true,
        trim: true
    },
    descripcion: {
        type: String,
        require: true,
        trim: true
    },
    autor: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "Usuario",
    },
    lista: [
        {
            type: Schema.Types.ObjectId,
            require: false,
            ref: "ElementoLista",
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

module.exports = mongoose.model("Lista", ListaSchema);