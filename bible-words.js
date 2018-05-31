var fs = require("fs");
var text = fs.readFileSync("kjv.txt", "utf-8");
text = text.replace(/\r\n/g, '\n');
text = text.replace(/\r/g, '\n');
var lines = text.split('\n');
var allWords = [];

lines.filter(function(line) {
	return line.replace(/^[ ]*|[ ]*$/g, '').length > 0;

}).forEach(function(line) {

    var parts = line.split(':');
    line = parts[1].substr(2);
	var words = line.split(/\W/g);

	words.filter(function(word) {
		return /[^\W\s\d]+/.test(word);
	}).forEach(function(word) {
		if (allWords.indexOf(word) === -1) allWords.push(word);
	});
});

allWords = allWords.sort();
console.log(allWords.join(','));

