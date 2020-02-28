(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function() {
	var video = document.getElementById('video'),
		canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		photo = document.getElementById('photo'),
		vendorUrl = window.URL || window.webkitURL;

	navigator.getMedia =	navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

	navigator.getMedia({
		video: true,
		audo: false
	}, function(stream) {
		//video.src = vendorUrl.createObjectURL(stream);
		video.srcObject = stream;
		video.play();
	},
		function(error) {
			//error occurred
	});
	document.getElementById('capture').addEventListener('click', function() {
	context.drawImage(video, 0, 0, 400, 300);
//	var img = new Image;
//	img.src = strDataURI;
	
	const spawn = require('child_process').spawn;
	const process = spawn('python3', ['./barcode_scanner.py -i'  ]);
	process.stdout.on('data', (data) => {
	console.log(data.toString());	
	});
	var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	console.log("3iqwejtioqwejoiweqrjofiehoufeqhuiofwe" + window.location.href);
	});
})();

},{"child_process":2}],2:[function(require,module,exports){

},{}]},{},[1]);
