(function() {

    // Declaring variables  
    var fs = require('fs'),
        tidynames = require ('./tidynames'),
        currentDirectory = process.cwd(),
        program = require('commander');

    program
      .version('0.1.0')
      .option('-l, --nolowercase', 'disable lowercase transformation')
      .option('-u, --underscores', 'use underscores instead of hyphens')
      .parse(process.argv);

    // Loop through contents of current directory and tidy names
    fs.readdir(currentDirectory, function (err, files) {

        if (err) throw err;

        for (var i in files) {

            var currentFile = files[i];
            var stats = fs.statSync(currentFile);

            if (stats.isFile()) {
                fs.rename(currentFile, tidynames.tidy(currentFile, program.underscores, program.nolowercase), function (err) {
                    if (err) throw err;
                });
            }
        }

    });

}).call(this)