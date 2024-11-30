import mongoose from "mongoose";

const platilloSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    ingredientes: { type: String, required: true },
    precio: { type: Number, required: true },
    imagen: { type: String, required: true },
    categoria_id: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria", required: true }
}, {
    timestamps: true 
});

export default mongoose.model("platillo", platilloSchema);
