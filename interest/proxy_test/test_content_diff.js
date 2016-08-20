var expect = require('chai').expect;
var assert = require("assert");




describe('diff',function(){
	describe('# display content diff ',function(){
		it('should return a diff formed from two string buffers ',function(){
			var diff = require("../proxy/diff.js");
			var fs = require("fs");
		        var strA = fs.readFileSync('./res/sina_0817.html').toString().split('\n');	
		        var strB = fs.readFileSync('./res/sina_0819.html').toString().split('\n');	
		        var expecteddiff = fs.readFileSync('./res/sina_diff.html').toString().split('\n');	
			var diff_result = diff.fromstr(strA,strB);	
			expect(expecteddiff[103]).to.contain(diff_result[103]);		
						
		});	
	});
});


describe('simplify',function(){
	describe('# remove tags out from content ',function(){
		it('should return a content buffer without tags ',function(){
			var pure = require("../proxy/simplifier.js");
			var fs = require("fs");
		        var input = fs.readFileSync('./res/sina_diff.html').toString().split('\n');	
		 	var output = pure.fromarray(input);	
			expect(output).not.to.contain("<") && expect(output).not.to.contain(">");
						
		});	
	});
});
