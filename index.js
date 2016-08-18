var lade  = require("latte_lade")
module.exports = function(path, options) {
	var data = lade.load(path);
	var object = lade.toObject(data);
	var result = lade.parse(object);
	return result.html;
}