var difflib = require("difflib");

function _fromurl(urla,urlb,callback){

	


}


function _fromstr(stra,strb){

	// use difflib imported
	return difflib.unifiedDiff(stra,strb);

}

module.exports = {

	fromurl : _fromurl,

	fromstr : _fromstr 

}
