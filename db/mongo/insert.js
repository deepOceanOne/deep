
var  assert = require('assert');


insertDocuments = function(db,content, callback) {
  // Get the documents collection 
  var collection = db.collection('documents');
  // Insert some documents 
  // describ, title, detail

  collection.insertMany([
    {describ : content.describ}, {title : content.title}, {detail : content.detail}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}



module.exports = {

	insert : insertDocuments

}
