import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true }
}, {
    timestamps: true 
});

export default mongoose.model("categoria", categoriaSchema);
