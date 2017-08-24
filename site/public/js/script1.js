var script1 = function () {
	Page.call(this);

	var $container = document.createElement('div');
	$container.className = 'script1-container';
	$container.innerHTML = 'this is the container for script 1';

	var component = new Component($container);

	this.$page.appendChild($container);
};

script1.prototype = Object.create(Page.prototype);