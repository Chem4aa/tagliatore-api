import Categoria from "../models/categoria.js";

const getCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findById(id);
        if (!categoria) return res.status(404).json({ message: "Categoría no encontrada" });
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addCategoria = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const newCategoria = new Categoria({ nombre, descripcion });
        const savedCategoria = await newCategoria.save();
        res.status(201).json({ message: "Categoría registrada correctamente", savedCategoria });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;

        const updatedCategoria = await Categoria.findByIdAndUpdate(
            id,
            { nombre, descripcion },
            { new: true }
        );
        if (!updatedCategoria) return res.status(404).json({ message: "Categoría no encontrada" });
        res.status(200).json({ message: "Categoría actualizada correctamente", updatedCategoria });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const delCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategoria = await Categoria.findByIdAndDelete(id);
        if (!deletedCategoria) return res.status(404).json({ message: "Categoría no encontrada" });
        res.status(200).json({ message: "Categoría eliminada correctamente" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getCategorias,
    getCategoria,
    addCategoria,
    updateCategoria,
    delCategoria
};
