const Mesero = require('../models/mesero.js');
const jwt = require('jsonwebtoken');


const crearMesero = async (req, res) => {
    try {
        const { nombre, email, telefono, dni, password } = req.body;

       
        const existingMesero = await Mesero.findOne({ email });
        if (existingMesero) return res.status(400).json({ error: 'El correo ya está en uso' });

        const newMesero = new Mesero({ nombre, email, telefono, dni, password });
        await newMesero.save();
        res.status(201).json({ message: 'Mesero creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getMeseros = async (req, res) => {
    try {
        const meseros = await Mesero.find();
        res.status(200).json(meseros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const loginMesero = async (req, res) => {
    try {
        const { email, password } = req.body;

        
        const mesero = await Mesero.findOne({ email });
        if (!mesero || !mesero.estado) return res.status(404).json({ error: 'Mesero no encontrado' });

       
        const isMatch = await mesero.comparePassword(password);
        if (!isMatch) return res.status(401).json({ error: 'Contraseña incorrecta' });

       
        const token = jwt.sign({ id: mesero._id }, 'secret_key', { expiresIn: '1h' });
        res.json({ token, mesero: { nombre: mesero.nombre, email: mesero.email } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const actualizarMesero = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, telefono, dni, password } = req.body;

        
        const updatedMesero = await Mesero.findById(id);
        if (!updatedMesero) return res.status(404).json({ error: 'Mesero no encontrado' });

       
        if (nombre) updatedMesero.nombre = nombre;
        if (email) updatedMesero.email = email;
        if (telefono) updatedMesero.telefono = telefono;
        if (dni) updatedMesero.dni = dni;
        if (password) updatedMesero.password = await bcrypt.hash(password, 10); 

        await updatedMesero.save();
        res.json({ message: 'Mesero actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const eliminarMesero = async (req, res) => {
    try {
        const { id } = req.params;

    
        const mesero = await Mesero.findById(id);
        if (!mesero) return res.status(404).json({ error: 'Mesero no encontrado' });

        mesero.estado = false; 
        await mesero.save();

        res.json({ message: 'Mesero eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const methods = {
    crearMesero,
    getMeseros,
    actualizarMesero,
    eliminarMesero,
    loginMesero
};
