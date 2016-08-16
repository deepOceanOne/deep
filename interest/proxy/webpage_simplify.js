var simplifier = require("./simplifier.js");
var parser = require('./parser.js');

parser.init(simplifier);


var jsonafterparsed = parser.parseUrl("www.baidu.com");  // leave json data

console.log(jsonafterparsed);


