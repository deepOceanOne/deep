var proxy = require("http-proxy").createProxyServer({});

var http = require("http");

var fs = require("fs");

var server = http.createServer(function(request,response){
	

	console.log("got one request");

	var path = request.url;


//	console.log("request path is : "+request.url);

		
	http.get(path,function(res){

		var html = '';
		// now trick is needed here
		res.pipe(response);

		res.on('data',function(data){
			html += data;
		})

		res.on("end",function(){
		
			console.log("end .. ");
			filename = path | "empty";
			fs.writeFile('index.html', html, function(err) { 	
				if (err) { 
				}
					console.log('content stored ... ');
				
			});
		});


	});

			
	
	
});


server.listen(80);


// how to use this :  ---  curl -x http://localhost:80  www.sina.com.cn   
