(function() {

    // Declaring variables  
    var fs = require('fs'),
        tidynames = require ('./tidynames'),
        currentDirectory = process.cwd();

    // Loop through contents of current directory and tidy names
    fs.readdir(currentDirectory, function (err, files) {

        if (err) throw err;

        for (var i in files) {

            var currentFile = files[i];
            var stats = fs.statSync(currentFile);

            if (stats.isFile()) {
                fs.rename(currentFile, tidynames.tidy(currentFile), function (err) {
                    if (err) throw err;
                });
            }
        }

    });

}).call(this)