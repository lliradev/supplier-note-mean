const express = require('express');
const router = express.Router();

const notification = require('../controllers/notification.controller');

router.get('/', notification.getNotifications);
router.post('/', notification.createNotification);
router.get('/:id', notification.getNotification);
router.put('/:id', notification.editNotification);
router.delete('/:id', notification.deleteNotification);

module.exports = router;