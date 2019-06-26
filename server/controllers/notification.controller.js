const Notification = require('../models/notification');
const notificationCtrl = {};


notificationCtrl.getNotifications = async (req, res) => {
    //Hace busqueda a la BD

    const notifications = await Notification.find();
    res.json(notifications);
};

notificationCtrl.createNotification = async (req, res) => {
    //crear Notificacion
    const notification = new Notification({
        notification_type: req.body.notification_type,
        date: req.body.date,
        recordatory: req.body.recordatory
    });
    await notification.save();

    res.json({
        'status': '2134567'
    });
};

notificationCtrl.getNotification = async (req, res) => {
    const notification = await Notification.findById(req.params.id);

    res.json(notification);
};

notificationCtrl.editNotification = async (req, res) => {
    const { id } = req.params;
    const notification = {
        notification_type: req.body.notification_type,
        date: req.body.date,
        recordatory: req.body.recordatory
    }
    await Notification.findByIdAndUpdate(id, { $set: notification }, { new: true });
    res.json({
        status: 'Notificacion Actualizada'
    });

}
notificationCtrl.deleteNotification = async (req, res) => {
    await Notification.findByIdAndRemove(req.params.id);
    res.json({ status: 'Notificacion Eliminada' });
}
module.exports = notificationCtrl;