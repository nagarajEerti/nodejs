const env = require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/hamlet?authSource=admin", {
    // useCreateIndex:true,
    autoIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
});


function getDatabaseURL() {
    let uri = '';
        uri = process.env.DEVELOPMENT_DATABASE_URI;
   return uri;
}

mongoose.connection.on("connected", function () {
    console.log(
        `Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`
    );
});

mongoose.connection.on("error", function (err) {
    console.log("Mongoose default connection error: " + err);
});

mongoose.connection.on("disconnected", function () {
    console.log("Mongoose default connection disconnected");
});

