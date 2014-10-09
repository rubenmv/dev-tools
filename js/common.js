/*global window, document*/
(function() {
	'use strict';
	/**
	 * FILE PICKER. Let's assume is just one per page
	 */
	document.getElementById('file-picker__input').addEventListener('change',
		function setFileName(event) {
			var value = 'Click to choose the image';
			if (event.target.value !== '') {
				value = event.target.value.replace(/^.*\\/, '');
			}

			document.getElementById('file-picker__label').innerText = value;
		});
}());
