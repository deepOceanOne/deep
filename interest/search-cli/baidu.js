var baidu = require("baidu-search");

baidu('Microsoft',function(err,res){

	res.links.forEach(function(item,idx){
		console.log('title : '+item.title);
	})

})
