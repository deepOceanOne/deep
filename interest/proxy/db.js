
var MongoClient = require('mongodb').MongoClient
var  assert = require('assert');

var dbops = {

close : function(){
	
	if(!db){
		db.close();
	}

},

settings : [{"monghost":"mongodb://localhost" },{"mongoport":"27017"},{"mongopathn":"test"}];

// provide the ability to connect to db 
connect : function(callback){

	// callback will get a db connection in return 
	var url = [settings.mongohost,":",settings.mongoport,"/",settings.mongopath].join("");
	MongoClient.connect(url, function(err, db) {
		if(!err){
			callback(db);
		}
	}

},

insert : function(content,callback){

	if(!WeakMap.get("dbinstance")){
		insertDocuments(WeakMap.get("dbinstance"),content,callback);
	}else{
		var url = [settings.mongohost,":",settings.mongoport,"/",settings.mongopath].join("");
		MongoClient.connect(url, function(err, db) {
			if(!err){
				// get access to the db now 
				// cache the db link lf possible
				WeakMap.put("dbinstance",db);
				insertDocuments(WeakMap.get("dbinstance"),content,callback);
			}	
		}
	}
}, 

insertDocuments : function(db,content, callback) {
  // Get the documents collection 
  var collection = db.collection('documents');
  // Insert some documents 
  // describ, title, detail

  // make a default implementation of callback
  callback = callback || (function(param){db.close();});

  collection.insertMany([
    {describ : content.describ, title : content.title, detail : content.detail}
  ], function(err, result) {
/*
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
*/
    callback(result);
  });
}


}

module.exports = dbops;


 






