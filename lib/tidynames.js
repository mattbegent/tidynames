exports.tidy = function(filename){

	return filename.replace(/\s+/g, '-').replace(/_/g, '-').toLowerCase();
	
}