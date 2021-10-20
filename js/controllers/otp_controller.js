 const OTPModel = require('../models/otp_model');
//otp sender 
exports.sendOTP = function(req,res){
    const mobile = req.body.mobile;
    OTPModel.sendOTPToWhatsapp(mobile)
    .then(data=>{
        res.status(200).json({"res":data })
    })
    .catch(err=>{
        res.status(500).json({"error":err })
    })
}