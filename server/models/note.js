const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    type: { type: String, required: true },
    responsible: { type: String, required: true }, //responsible
    amount: { type: Number, required: true },
    reason: { type: String, required: true }
});

module.exports = mongoose.model('Note', NoteSchema);