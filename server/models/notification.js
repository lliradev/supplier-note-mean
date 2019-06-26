const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotificationSchema = new Schema({
    //Tipo Notificacion
    notification_type: { type: String, required: true },
    //Fecha
    date: { type: Date, required: true },
    //Recordatory
    recordatory: { type: String, required: true }

});

module.exports = mongoose.model('Notification', NotificationSchema);