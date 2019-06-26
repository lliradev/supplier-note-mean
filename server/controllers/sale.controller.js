const SellControl = require('../models/sale');
const sellControlCtrl = {};


sellControlCtrl.getSellControls = async (req, res) => {
    //Hace busqueda a la BD

    const sellControls = await SellControl.find();
    res.json(sellControls);
};

sellControlCtrl.createSellControl = async (req, res) => {
    //crear SellControl
    const sellControl = new SellControl({
        dateSell: req.body.dateSell,
        table: req.body.table,
        dish_drink: req.body.dish_drink,
        quantity: req.body.quantity,
        toPay: req.body.toPay,
        payType: req.body.payType
    });
    await sellControl.save();

    res.json({
        'status': 'Realizado'
    });
};

sellControlCtrl.getSellControl = async (req, res) => {
    const sellControl = await SellControl.findById(req.params.id);

    res.json(sellControl);
};

sellControlCtrl.editSellControl = async (req, res) => {
    const { id } = req.params;
    const sellControl = {
        dateSell: req.body.dateSell,
        table: req.body.table,
        dish_drink: req.body.dish_drink,
        quantity: req.body.quantity,
        toPay: req.body.toPay,
        payType: req.body.payType
    }
    await SellControl.findByIdAndUpdate(id, { $set: sellControl }, { new: true });
    res.json({
        status: 'Venta Actualizada'
    });

}
sellControlCtrl.deleteSellControl = async (req, res) => {
    await SellControl.findByIdAndRemove(req.params.id);
    res.json({ status: 'Venta Eliminada' });
}
module.exports = sellControlCtrl;