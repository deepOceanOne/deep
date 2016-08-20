var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var insertOps = require("./insert.js");
 
// Connection URL 
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

 
});


  insertOps.insert(db,content,function(){
        db.close();
        console.log("insert complete....");
  });    




