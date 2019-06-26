export class Schedule {
    constructor(_id = '', name = '', date = null, email = '', reminder = '') {
        this._id = _id;
        this.name = name;
        this.date = date;
        this.email = email;
        this.reminder = reminder;
    }

    _id: string;
    name: string;
    date: Date;
    email: string;
    reminder: string;
}
