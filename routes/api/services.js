const express = require('express');
const router = express.Router();
const servicesCtrl = require('../../controllers/services')

router.post('/assets/:id/services', servicesCtrl.create)
router.delete('/services/:id', servicesCtrl.deleteService)

module.exports = router;