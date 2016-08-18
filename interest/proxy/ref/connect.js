var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var fs = require('fs')

var insertOps = require("./insert.js");
 
// Connection URL 
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

// do insert  operation

// read the documents
  _read_src("./total.txt",db);

 
});


function _read_src(src_path,db){
	var remaining = ''; 
	fs.createReadStream(src_path).on('data', function(data) {   	
	    remaining += data;                                                                                                                         
	    var index = remaining.indexOf('\n');                                                                                                       
	    while (index > -1) {                                                                                                                       
	      line = remaining.substring(0, index);                                                                                                
	      remaining = remaining.substring(index + 1);          
	      func(line,db);                                                                                                                              
	      index = remaining.indexOf('\n');                                                                                                         
	    }                        	
	})
	.on("end",function(){
		console.log("end1");
		console.log("db operation done");
		db.close();
	});

}

function func(data,db) {                                                                                                                                                                                                                                 
   console.log("insert one item done"); 
   content = 	{
		"describ" : data.split(" === ")[0],
		"title" : data.split(" === ")[1],
		"detail" : data.split(" === ")[2]
	};
  insertOps.insert(db,content,function(){
        db.close();
        console.log("insert complete....");
  });    

}    



// the insertion  operation
// dumped
var insertDocuments = function(db, callback) {
  // Get the documents collection 
  var collection = db.collection('documents');
  // Insert some documents 
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}
