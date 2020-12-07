const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeguidoSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "Usuario",
    },
    siguiendo: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: "Usuario",
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

module.exports = mongoose.model("Seguido", SeguidoSchema);