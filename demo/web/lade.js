(function(){
	this.get = function(req, res) {
		res.sendView("lade", "./view/test.lade");
	}
	this.path = "/lade";
}).call(module.exports);	