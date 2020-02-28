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
