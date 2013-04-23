exports.tidy = function(filename, underscores, nolowercase){

    // Variables
    var tidiedFilename = filename;
    var separator = "-";

    // Check separator
    if(underscores) {
        separator = "_";
        tidiedFilename = tidiedFilename.replace(/-/g, separator);
    }
    else {
        tidiedFilename = tidiedFilename.replace(/_/g, separator);
    }

    // Check case
    if(!nolowercase) {
        tidiedFilename = tidiedFilename.toLowerCase();
    }

    // Lets replace spaces with separator
    tidiedFilename = tidiedFilename.replace(/ +(?=)/g, separator);
	
    return tidiedFilename;
	
}