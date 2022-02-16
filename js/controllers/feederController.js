const feederModel = require('../models/feeder')

//save uris
exports.saveFeeds = function(req,res){
    // let uris = req.body.uris;
let url = ["a","b","c","d"];
     url.forEach(element => {
         let obj = {element};
         feederModel.saveFeeds(obj)
     });
     res.status(200).json({"res":"added"});
}