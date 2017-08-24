var Fabricator = function () {

	var registry = { };

	this.load = function (name) {
		return new registry[name];
	};

	this.register = function (name, page) {
		registry[name] = page;
	};

	this.register('script1', script1);
	this.register('script2', script2);
	this.register('script3', script3);
};