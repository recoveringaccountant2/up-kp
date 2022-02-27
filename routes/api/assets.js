const express = require('express');
const router = express.Router();
const assetsCtrl = require('../../controllers/assets');
const multer = require('multer');
const upload = multer(); // <- handles multipart/formdata requests(photos)
// /*---------- Public Routes ----------*/

// photo is the key on the formData object in the AddPost component
router.post('/', isAuthenticated, upload.single('photo'), assetsCtrl.create);
router.get('/', assetsCtrl.index)


/*---------- Protected Routes ----------*/
function isAuthenticated(req, res, next){
	if(req.user){
		next()
	} else {
		res.status(401).json({data: 'Not Authorized!'})
	}
}



module.exports = router;