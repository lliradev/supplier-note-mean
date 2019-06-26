const mongoose = require('mongoose');
const { Schema } = mongoose;

const SupplierSchema = new Schema({
    companyName: { type: String, required: true },
    contactName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, require: true },
    postalCode: { type: Number, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true }
});

module.exports = mongoose.model('Supplier', SupplierSchema);