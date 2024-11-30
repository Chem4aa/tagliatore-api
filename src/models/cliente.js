import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    dni: { type: String, required: true, unique: true }
}, {
    timestamps: true 
});

export default mongoose.model("cliente", clienteSchema);
