import Cliente from "../models/cliente.js";

const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getCliente = async (req, res) => {
    try {
        const { id_cliente } = req.params;
        const cliente = await Cliente.findById(id_cliente);
        if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateCliente = async (req, res) => {
    try {
        const { id_cliente } = req.params;
        const { nombre, correo, telefono, dni } = req.body;

        const cliente = await Cliente.findByIdAndUpdate(
            id_cliente,
            { nombre, correo, telefono, dni },
            { new: true }
        );
        if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
        res.status(200).json({ message: "Cliente actualizado correctamente", cliente });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const delCliente = async (req, res) => {
    try {
        const { id_cliente } = req.params;
        const cliente = await Cliente.findByIdAndDelete(id_cliente);
        if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
        res.status(200).json({ message: "Cliente eliminado correctamente" });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const addCliente = async (req, res) => {
    try {
        const { nombre, correo, telefono, dni } = req.body;
        const newCliente = new Cliente({ nombre, correo, telefono, dni });
        const savedCliente = await newCliente.save();
        res.status(201).json({ message: "Cliente registrado correctamente", savedCliente });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const methods = {
    getClientes,
    getCliente,
    updateCliente,
    delCliente,
    addCliente
};
