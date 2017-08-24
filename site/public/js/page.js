var Page = function () {
	var $body = document.querySelector('body');
	this.$page = document.createElement('div');
	this.load = function () {
		$body.appendChild(this.$page);
	};
	this.remove = function () {
		$body.removeChild(this.$page);
	};
};