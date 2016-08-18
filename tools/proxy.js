var proxy = require("http-proxy").createProxyServer({});

var http = require("http");


var server = http.createServer(function(request,response){
	

	console.log("got one request");

	var path = request.url;


//	console.log("request path is : "+request.url);

		
	http.get(path,function(res){

		// now trick is needed here
		res.pipe(response);

	}).end();

			
	
	
});


server.listen(80);


// how to use this :  ---  curl -x http://localhost:80  www.sina.com.cn   
