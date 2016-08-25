var http = require("http");                                                                                                                    
var https = require("https");                                                                                                                  
var url = require("url");                                                                                                                      
var fs = require("fs");                                                                                                                        
                                                                                                                                               
// global cache                                                                                                                                
cachedhost = "" ;                                                                                                                              
cachedprotocol = "" ;                                                                                                                          
                                                                                                                                               
var server = http.createServer(function(request,response){                                                                                     
                                                                                                                                               
        console.log("got one request");                                                                                                        
                                                                                                                                               
        var path = request.url.slice(1);                                                                                                       
        console.log("request path is : "+path);                                                                                                
        // deal with host lost issue                                                                                                           
        if(path.search(/http/)<0){                                                                                                             
                // use the cached host then                                                                                                    
                console.log("use cached request ");                                                                                            
                path = cachedprotocol + "//" + cachedhost + "/"  + path;                                                                       
        }else{                                                                                                                                 
                var parsedurl = url.parse(path);                                                                                               
                cachedhost = parsedurl.host;                                                                                                   
                cachedprotocol = parsedurl.protocol;                                                                                           
                console.log("parsed host : "+parsedurl.host);                                                                                  
                console.log("cache one request ");                                                                                             
        }
console.log(" parsed request path is : "+path);                                                                                          
                                                                                                                                               
        if(path.search(/reboot/)>-1){                                                                                                          
                // reboot it then                                                                                                              
                thisisdefinitelynotworking                                                                                                     
        }                                                                                                                                      
                                                                                                                                               
        if(path.search(/https/)>-1){                                                                                                           
        https.get(path,function(res){                                                                                                          
                                                                                                                                               
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
        }else{                                                                                                                                 
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
        }                                                                                                                                      
                                                                                                                                               
                                                                                                                                               
                                                                                                                                               
});                                                                                                                                            
                                                                                                                                               
                                                                                                                                               
server.listen(81);                                                                                                                             
                               
