var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');


/* GET users listing. */
router.get('/login', userController.login);
router.post('/login', userController.postLogin);
router.get('/register', userController.register);
router.post('/register',userController.postRegister);
router.get('/logout', userController.logout);



router.get('/profile/modify',userController.modify);
router.post('/profile/modify',userController.postModify);
router.get('/profile', userController.profile);



module.exports = router;
