require("./patch_for_prototype.js");

function _titlefrom(input){
	var title = '';
	var arr = input.split(".");
	for (var arrindex = 0;arrindex<arr.length;arrindex++){
		title += arr[arrindex];		
		if(arrindex+1<arr.length){
			title += "_";
		}
	}
	return title;
}


module.exports = {

	titlefrom : _titlefrom

}
