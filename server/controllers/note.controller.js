const Note = require('../models/note');
const noteCtrl = {};

noteCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

noteCtrl.createNote = async (req, res) => {
    const note = new Note({
        type: req.body.type,
        responsible: req.body.responsible,
        amount: req.body.amount,
        reason: req.body.reason
    });
    await note.save();
    res.json({ status: "Note saved!" })
};

noteCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
};

noteCtrl.editNote = async (req, res) => {
    const { id } = req.params;
    const note = {
        type: req.body.type,
        responsible: req.body.responsible,
        amount: req.body.amount,
        reason: req.body.reason
    };
    await Note.findByIdAndUpdate(id, { $set: note }, { new: true });
    res.json({ status: "Note updated!" });
};

noteCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndRemove(req.params.id);
    res.json({ status: "Note deleted!" });
};

//Exports
module.exports = noteCtrl;