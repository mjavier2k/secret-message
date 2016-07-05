var shortId = require('shortid');
module.exports = function(client){
  var module = {};

    client.on('connect', function (err) {
      console.log('redis client connected')
    });

    client.on('error', function(err){
      console.log('Redis error: '+err)
    })

  module.set = function(key, value, callback){
    client.set(key, value, function(err,reply){
      if (err){
        callback("Error setting redis key: "+err)
      } else {
        callback(null, reply)
      }
    })
  }
  return module;
}
