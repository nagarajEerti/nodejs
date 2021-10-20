const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otp_controller');


//send otp 
router.get('/otp',otpController.sendOTP);

module.exports = router;