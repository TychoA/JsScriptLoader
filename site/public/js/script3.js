var script3 = function () {

	var element = document.createElement('h1');
	element.innerHTML = 'A title for the index';

	this.page = function () {
		document.querySelector('.container').appendChild(element);
	};
};