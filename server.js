//imort modules
const express = require('express');
const app = express();
const dotenv = require('dotenv')
const config = dotenv.config();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const otp = require('./js/routes/otp_routes');

app.use(otp);

app.listen(process.env.PORT, () => {

    console.log(`running on ${process.env.PORT}`)

});