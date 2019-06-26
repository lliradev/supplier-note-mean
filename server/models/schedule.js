const mongoose = require ('mongoose');
const { Schema } = mongoose;

const ScheduleSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true},
    email: { type: String, required: true },    
    reminder: { type: String, required: true }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);