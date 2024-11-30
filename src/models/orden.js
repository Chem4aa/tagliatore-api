const mongoose = require('mongoose');

const ordenSchema = new mongoose.Schema({
    idMesa: { type: String, required: true },
    platillos: [{
        idPlatillo: { type: mongoose.Schema.Types.ObjectId, ref: 'Platillo', required: true },
        cantidad: { type: Number, required: true }
    }],
    estado: { type: String, enum: ['pendiente', 'entregado', 'cancelado'], default: 'pendiente' }
});

export default mongoose.model('Orden', ordenSchema);
