var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const passport = require('../passport');
const authMiddleware = require('../middlewares/auth');

router.get('/login', userController.login);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/user/login',
    failureFlash: true
}));

router.get('/confirm/:token', userController.confirm);

router.get('/forget', userController.forgetPass);
router.post('/forget', userController.postForgetPass);
router.get('/forget/:token', userController.resetPass);
router.post('/forget/:token', userController.postResetPass);

router.get('/register', userController.register);
router.post('/register', userController.postRegister);

router.get('/logout', userController.logout);


router.get('/profile/modify', authMiddleware.requireAuth, userController.modify);
router.post('/profile/modify', authMiddleware.requireAuth, userController.postModify);
router.get('/profile', authMiddleware.requireAuth, userController.profile);


module.exports = router;
