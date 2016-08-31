// used to simplifier code flow
var watch = new(require('simple-treewatch'))();
 
var WATCHEDDIR = "./record";

watch.watch(WATCHEDDIR);
watch.addAction(function(data) {
    console.log(data.event + " : " + data.fullPath);
});
