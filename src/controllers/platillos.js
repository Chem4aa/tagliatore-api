import Platillo from "../models/platillo.js";

const getPlatillos = async (req, res) => {
    try {
        const platillos = await Platillo.find().populate("categoria_id");
        res.status(200).json(platillos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getPlatillo = async (req, res) => {
    try {
        const { id_platillo } = req.params;
        const platillo = await Platillo.findById(id_platillo).populate("categoria_id");
        if (!platillo) return res.status(404).json({ message: "Platillo no encontrado" });
        res.status(200).json(platillo);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addPlatillo = async (req, res) => {
    try {
        const { nombre, ingredientes, precio, imagen, categoria_id } = req.body;
        const newPlatillo = new Platillo({ nombre, ingredientes, precio, imagen, categoria_id });
        const savedPlatillo = await newPlatillo.save();
        res.status(201).json({ message: "Platillo registrado correctamente", savedPlatillo });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updatePlatillo = async (req, res) => {
    try {
        const { id_platillo } = req.params;
        const { nombre, ingredientes, precio, imagen, categoria_id } = req.body;
        const updatedPlatillo = await Platillo.findByIdAndUpdate(
            id_platillo,
            { nombre, ingredientes, precio, imagen, categoria_id },
            { new: true }
        );
        if (!updatedPlatillo) return res.status(404).json({ message: "Platillo no encontrado" });
        res.status(200).json({ message: "Platillo actualizado correctamente", updatedPlatillo });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const delPlatillo = async (req, res) => {
    try {
        const { id_platillo } = req.params;
        const deletedPlatillo = await Platillo.findByIdAndDelete(id_platillo);
        if (!deletedPlatillo) return res.status(404).json({ message: "Platillo no encontrado" });
        res.status(200).json({ message: "Platillo eliminado correctamente" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getPlatillos,
    getPlatillo,
    addPlatillo,
    updatePlatillo,
    delPlatillo
};
