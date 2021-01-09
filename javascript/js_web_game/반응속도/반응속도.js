var screen = document.querySelector("#screen");
var rate = document.querySelector("#rate");
var startTime;
var endTime;
var timeOut;
var rating = [];

screen.addEventListener('click', function(){
	
	if(screen.classList.contains("waiting")){
		screen.classList.remove("waiting");
		screen.classList.add("ready");
		screen.textContent = "초록색이 되면 클릭";
		timeOut = setTimeout(function(){
			startTime = new Date();
			screen.click();
		}, Math.floor(Math.random() * 1000)+1000);
	} else if(screen.classList.contains("ready")){
		if( !startTime ){
			clearTimeout(timeOut);
			screen.classList.remove("ready");
			screen.classList.add("waiting");
			screen.textContent = "부정출발 (클릭하면 다시 시작)";
		} else {
			screen.classList.remove("ready");
			screen.classList.add("now");
			screen.textContent = "클릭";
		}
		
	} else if(screen.classList.contains("now")){
		var endTime = new Date();
		console.log(endTime - startTime);
		rating.push(endTime-startTime);
		screen.classList.remove("now");
		screen.classList.add("waiting");
		screen.textContent = "클릭해서 시작";
		startTime = null;
		endTime = null;
		
		var resultStr = "";
		for (var i=0; i<rating.length; i++){
			resultStr += rating[i];
		}
		rate.textContent = resultStr;
	}
})