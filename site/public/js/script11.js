var Component = function ($parent) {
	var $message = document.createElement('p');
	$message.innerHTML = 'This is a message for script 1';
	$parent.appendChild($message);
	this.remove = function () { $parent.removeChild($message); };
};