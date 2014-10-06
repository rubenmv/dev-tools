/*global window, document, console, FileReader*/
'strict';

var FILE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/x-icon'],
	FILE_SIZE_LIMIT = 202400; //Bytes, 100KB (1KB = 1024B)

function setFileError(errorString) {
	document.getElementById('file-error').textContent = errorString;
}

function reset() {
	document.getElementById('file-error').textContent = '';
	document.getElementById('results-string').value = '';
	document.getElementById('results-html').value = '';
}

function handleFileSelect(evt) {
	var filePicker = document.getElementById('file-picker__input');
	if(filePicker === null) {
		return false;
	}
	var files = filePicker.files,
		file = files[0];
	if (files && file) {
		if (file.size > FILE_SIZE_LIMIT) {
			setFileError('File size limit exceeded');
			evt.srcElement.value = '';
			return false;
		}
		else if (FILE_TYPES.indexOf(file.type) === -1 ) {
			setFileError('Invalid file type');
			evt.srcElement.value = '';
			return false;
		}
		var reader = new FileReader();
		reader.onload = function(readerEvt) {
			var binaryString = readerEvt.target.result,
				base64String = 'data:image/png;base64,' + window.btoa(binaryString);
			document.getElementById("results-string").value = base64String;
			document.getElementById("results-html").value = '<img src="'+base64String+'" />';
		};
		reader.readAsBinaryString(file);
	}
}

if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('button-convert').addEventListener('click', handleFileSelect, false);
	document.getElementById('file-picker__input').addEventListener('click', reset, false);
} else {
    setFileError('The File APIs are not fully supported in this browser.');
}