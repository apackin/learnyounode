var fs = require('fs');

fs.readdir(process.argv[2], function(err, list) {
	if(err) {console.log("Error!")};
	var ext = "." + process.argv[3];
	list.forEach(function(file){
		if(file.search(ext)>0){
			console.log(file);
		}
	});
});