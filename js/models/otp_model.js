
//config dotenv file
const dotenv = require('dotenv').config();
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;   
const client = require('twilio')(accountSid, authToken, { 
    lazyLoading: true 
});
//send otp to whtsapp 
exports.sendOTPToWhatsapp = function (mobile) {
    let otp = Math.floor(1000 + Math.random() * 9000);
    return new Promise((resolve, reject) => {
        client.messages.create({
            from: `whatsapp:+14155238886`,
            body: `Your OTP ${otp} `,
            to: `whatsapp:+91${mobile}`
        })
        .then(data => {
           resolve(data);
        })
        .catch(err=>{
            reject(err)
        })
    

    })
}