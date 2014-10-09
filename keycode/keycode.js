/*global window, document, console*/
(function() {
	'use strict';

	var code = document.getElementById('keycode'),
		desc = document.getElementById('code-description');

	function setCode(event) {
		// return false doesn't work on this type of calls
		// so we use preventDefault() to cancel browser actions (like f1 opening help...)
		event.preventDefault();
		code.textContent = event.keyCode;
	}

	window.addEventListener('keydown', setCode);
}());
