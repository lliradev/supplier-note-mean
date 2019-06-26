const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuSchema = new Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Menu', MenuSchema);