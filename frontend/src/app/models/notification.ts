export class Notification {
    constructor(_id = '', notification_type = '', date = null,
        recordatory = '') {
        this._id = _id;
        this.notification_type = notification_type;
        this.date = date;
        this.recordatory = recordatory;

    }
    _id: String;
    notification_type: String;
    date: Date;
    recordatory: String;

}