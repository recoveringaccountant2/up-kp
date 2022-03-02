const express = require('express');
const router = express.Router();
const servicesCtrl = require('../../controllers/services')
const multer = require('multer');
const upload = multer(); // <- handles multipart/formdata requests(photos)


router.post('/assets/:id/services', isAuthenticated, servicesCtrl.create)
// router.get('/', isAuthenticated, assetsCtrl.index);
router.delete('/services/:id', isAuthenticated, servicesCtrl.deleteService)

/*---------- Protected Routes ----------*/
function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}

module.exports = router;