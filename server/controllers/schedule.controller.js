const Schedule = require('../models/schedule');
const scheduleCtrl = {};

scheduleCtrl.getSchedules = async (req, res) => {
    const schedules = await Schedule.find();
    res.json(schedules);
};

scheduleCtrl.createSchedule = async (req, res) => {
    const schedule = new Schedule({
        name: req.body.name,
        date: req.body.date,
        email: req.body.email,
        reminder: req.body.reminder
    });
    await schedule.save();
    res.json({
        'status': 'Agenda guardada'
    });
    //console.log(req.body);
    //res.json('Received');
};

scheduleCtrl.getSchedule = async (req, res) => {
    const schedule = await Schedule.findById(req.params.id);
    res.json(schedule);
};

scheduleCtrl.editSchedule = async (req, res) => {
    const { id } = req.params;
    const schedule = {
        name: req.body.name,
        date: req.body.date,
        email: req.body.email,
        reminder: req.body.reminder
    };
    await Schedule.findByIdAndUpdate(id, { $set: schedule }, { new: true });
    res.json({ status: 'Agenda eliminada' });
};

scheduleCtrl.deleteSchedule = async (req, res) => {
    await Schedule.findByIdAndRemove(req.params.id);
    res.json({ status: 'Agenda eliminada' });
};

module.exports = scheduleCtrl;