const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const meseroSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: { type: String, required: true },
    dni: { type: String, required: true },
    password: { type: String, required: true },
    estado: { type: Boolean, default: true } 
});


meseroSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); 
    this.password = await bcrypt.hash(this.password, 10); 
});

// Método para comparar contraseñas
meseroSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Mesero', meseroSchema);
