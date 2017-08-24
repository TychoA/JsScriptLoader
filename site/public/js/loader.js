window.onload = function () {
	var fabricator = new Fabricator();
	(fabricator.load(document.querySelector('body').className)).load();
};