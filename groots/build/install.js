'use strict';

// ==================================================
// Install Groots
// ==================================================

var fs  = require('fs');

fs.createReadStream('./groots/build/package.json.dist').pipe(fs.createWriteStream('./package.json'));
fs.createReadStream('./groots/build/gulpfile.js.dist').pipe(fs.createWriteStream('./gulpfile.js'));

console.log('groots setup in progress, starting npm install');

var progress = setInterval(function() {
    process.stdout.write(".");
}, 500);

var exec = require('child_process').exec,
    child = exec('npm install --silent || npm install --silent'),
    flag = '';

child.stderr.pipe(process.stderr);
child.stdout.pipe(process.stdout);

process.argv.forEach(function(item, index) {
    if (index === 2) flag = item;
});

child.on('close',function() {
    clearInterval(progress);
    console.log('\nnpm install completed, starting gulp initial ');
    progress = setInterval(function() {
        process.stdout.write(".");
    }, 500);
    var child2 = exec('gulp initial ' + flag);
    child2.on('close',function() {
        clearInterval(progress);
        console.log('\ngulp initial completed, groots is ready');
    });
});
