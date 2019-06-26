export class Sale {
    constructor(_id = '', dateSell = null, table = 0, dish_drink = '',
        quantity = 0, toPay = 0, payType = '') {
        this._id = _id;
        this.dateSell = dateSell;
        this.table = table;
        this.dish_drink = dish_drink;
        this.quantity = quantity;
        this.toPay = toPay;
        this.payType = payType;

    }
    _id: string;
    dateSell: Date;
    table: Number;
    dish_drink: String;
    quantity: Number;
    toPay: Number;
    payType: String;
}
