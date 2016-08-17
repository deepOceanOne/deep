var expect = require('chai').expect;
var assert = require("assert");




describe('parse',function(){
	describe('# url string title formation',function(){
		it('should return a string formed from url string',function(){
			var input = "www.sina.com.cn";
			var urlstring = require("../proxy/url_string.js");
			expect(urlstring.titlefrom(input)).to.be.equal("www_sina_com_cn");	
		});	
	});
	describe('# date time string formation',function(){
		it('should return a string formed from current time ',function(){
			var timedstring = require("../proxy/timed_string.js");
			expect(typeof timedstring.now()).to.be.equal(typeof "223");
		});	
	});
});
