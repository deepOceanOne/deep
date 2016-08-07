'use strict';
var packageJson = require('package-json');
var statSync = require('fs').statSync;
var R = require('ramda');
var parsePackage = function(data) {
	var devDependencies = R.keys(R.prop(['devDependencies'],data)).sort();
	var dependencies = R.keys(R.prop(['dependencies'],data)).sort();
	return {
		dependencies: dependencies,
		devDependencies: devDependencies
	}
}


global.packageList = [];

function _log(packagename){

	if(packageList.indexOf(packagename)>-1){
		// not console.log
	}else{
		console.log(packagename);
		packageList.push(packagename);
	}	

}

function _dep(input) {
	if (typeof input !== 'string') {
		throw new TypeError('Expected a string');
	}

		var opts = function(err,data){
			if(data.dependencies == undefined){ 
		_log("  ");
			}
			else{
			for(var i=0;i<data.dependencies.length;i++){
			_log(data.dependencies[i]);		
		 	_dep(data.dependencies[i]);
			}
			}
		}

	try {
		if (statSync(input).isFile()) {
			opts(null, parsePackage(require(__dirname + "/" + input)));
		}
	} catch(err) {
		packageJson(input, 'latest', function(err, data) {
			if(err) return cb(err, null);
			opts(null, parsePackage(data));
		});
	}

};

// indexOf extensions
if (!Array.prototype.indexOf) { 
Array.prototype.indexOf = function(elt) { 
var len = this.length >>> 0; 
var from = Number(arguments[1]) || 0; 
from = (from < 0) ? Math.ceil(from) : Math.floor(from); 
if (from < 0) from += len; 
for (; from < len; from++) { 
if (from in this && this[from] === elt) return from; 
} 
return - 1; 
}; 
} 


module.exports = {

	dep : _dep

}
