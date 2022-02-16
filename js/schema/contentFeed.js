const mongoose = require("mongoose")

const Schema = mongoose.Schema;
       const feeder =  new Schema({
        url: {
            type: String,
        }
       },
       {
        strict: true,
        versionKey: false,
        timestamps: true,
        usePushEach: true
    })
    module.exports = mongoose.model('feeds', feeder);