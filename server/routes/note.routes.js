const express = require('express');
const router = express.Router();
const note = require('../controllers/note.controller');

router.get('/', note.getNotes);
router.post('/', note.createNote);
router.get('/:id', note.getNote);
router.put('/:id', note.editNote);
router.delete('/:id', note.deleteNote);

module.exports = router;