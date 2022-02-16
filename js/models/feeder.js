const feedSchema = require('../schema/contentFeed');

//save feeds urls
exports.saveFeeds = function(url){
    return new Promise((resolve,reject)=>{
        feedSchema.create(url)
        .then(data=>{
            resolve(data)
        })
        .catch(err=>{
            reject(err)
        })
    })
}
//get data from single rss 
exports.getFeed = async() =>{
//   await  parser.parseURL('https://www.reddit.com/.rss')

//   await  parser.parseURL('https://www.newsclick.in/taxonomy/term/india/feed')
}