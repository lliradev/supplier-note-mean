const express = require('express');
const router = express.Router();

const sellControl = require('../controllers/sale.controller');

router.get('/', sellControl.getSellControls);
router.post('/', sellControl.createSellControl);
router.get('/:id', sellControl.getSellControl);
router.put('/:id', sellControl.editSellControl);
router.delete('/:id', sellControl.deleteSellControl);

module.exports = router;