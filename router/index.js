const express = require("express");
const router = express.Router();
const userController =  require('../controller/userController.js')

router.get('/',userController.homePage);
router.post('/login_action',userController.login_action);

router.get('/signup',userController.signUp);
router.post('/signup/action',userController.signup_action);
module.exports = router;