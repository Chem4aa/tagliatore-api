const Orden = require('../models/orden.js');


 const crearOrden = async (req, res) => {
    try {
        const nuevaOrden = new Orden(req.body);
        const ordenGuardada = await nuevaOrden.save();
        res.status(201).json(ordenGuardada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getOrden = async (req, res) => {
    try {
        const orden = await Orden.findById(req.params.id).populate('platillos.idPlatillo');
        if (!orden) return res.status(404).json({ error: 'Orden no encontrada' });
        res.json(orden);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getOrdenes = async (req, res) => {
    try {
        const ordenes = await Orden.find();
        res.status(200).json(ordenes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};


const actualizarOrden = async (req, res) => {
    try {
        const ordenActualizada = await Orden.findByIdAndUpdate(req.params.id, { estado: req.body.estado }, { new: true });
        if (!ordenActualizada) return res.status(404).json({ error: 'Orden no encontrada' });
        res.json(ordenActualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const eliminarOrden = async (req, res) => {
    try {
        const ordenEliminada = await Orden.findByIdAndDelete(req.params.id);
        if (!ordenEliminada) return res.status(404).json({ error: 'Orden no encontrada' });
        res.json({ message: 'Orden eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const methods = {
crearOrden,
getOrdenes,
getOrden,
actualizarOrden,
eliminarOrden
};