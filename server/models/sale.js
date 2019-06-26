const mongoose = require('mongoose');
const { Schema } = mongoose;

//moment().format();
const SaleSchema = new Schema({
    //FechaVenta
    dateSell: { type: Date, required: true },
    //Mesa
    table: { type: Number, required: true },
    //Platillo_Bebida 
    dish_drink: { type: String, required: true },
    //Cantidad
    quantity: { type: Number, required: true },
    //MontoPagar
    toPay: { type: Number, required: true },
    //TipoPago
    payType: { type: String, required: true }

});


module.exports = mongoose.model('Sale', SaleSchema);