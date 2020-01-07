var fileInput = document.getElementById("fileIn");
var width = fileInput.getAttribute('data-width');
var height = fileInput.getAttribute('data-height');
var imgPart = document.getElementById("imagePart");

window.addEventListener('change',function(){
	if(window.FileReader){
		var reader = new FileReader();
		reader.onload = function(v){
			imgPart.append('<img src="" id="temp_img" style="display:none;" />');
			var img = document.getElementById("temp_img").getAttribute('scr');

			console.log(img);
		}
	}
})


function readFile(fileElement){
	const reader = new FileReader();
	reader.onload = function(){
		imgPart.append('<img src="" id="temp_img" style="display:none;">');
		// var img = document.getElementById("temp_img").getAttribute('scr');
		console.log(reader);
		console.log(reader.result);
	}
	// reader.readAsText(fileElement.files[0], "EUC-KR");
	var temp = reader.readAsDataURL(fileElement.files[0]);
	console.log(temp);
}