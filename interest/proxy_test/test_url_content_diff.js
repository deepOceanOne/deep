var expect = require('chai').expect;
var assert = require("assert");




describe('diff',function(){
	describe('# display content diff from two different urls',function(){
		it('should return a diff formed from url response',function(){
		 	var urlA = "www.sina.com.cn";
			var urlB = "www.163.com";	
			var diff = require("../proxy/diff.js");
			var diff_result = diff.fromurl(urlA,urlB);	
						
		});	
	});
});
