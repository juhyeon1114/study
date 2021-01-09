var tetris = document.querySelector("#tetris");
var tetrisData = [];
var stopFalling = false;
var blockArr = 
[
	['red', true, [
		[1,1],
		[1,1],
	]],
	['blue', true, [
		[0,2,0],
		[2,2,2],
	]],
	['orange', true, [
		[3,3,0],
		[0,3,3],
	]],
	['green', true, [
		[0,4,4],
		[4,4,0],
	]],
	['navy', true, [
		[5,5,5],
		[5,0,0],
	]],
	['yellow', true, [
		[6,6,6],
		[0,0,6],
	]],
	['violet', true, [
		[7,7,7,7],
	]]
];
var blockDict =
{	
	0: ['white', false, []],
	1: ['red', true, [
		[1,1],
		[1,1],
	]],
	2: ['blue', true, [
		[0,1,0],
		[1,1,1],
	]],
	3: ['orange', true, [
		[1,1,0],
		[0,1,1],
	]],
	4: ['green', true, [
		[0,1,1],
		[1,1,0],
	]],
	5: ['navy', true, [
		[1,1,1],
		[1,0,0],
	]],
	6: ['yellow', true, [
		[1,1,1],
		[0,0,1],
	]],
	7: ['violet', true, [
		[1,1,1,1],
	]],
	10: ['red', false, []],
	20: ['blue', false, []],
	30: ['orange', false, []],
	40: ['green', false, []],
	50: ['navy', false, []],
	60: ['yellow', false, []],
	70: ['violet', false, []],
}

function makeTable (){
	var fragment = document.createDocumentFragment();
	for (var i=0; i<20; i++){
		var tr = document.createElement("tr");
		var arr = [];
		tetrisData.push(arr);
		fragment.appendChild(tr);
		for(var j=0; j<10; j++){
			var td = document.createElement("td");
			tr.appendChild(td);
			arr.push(0);
		}
	}
	tetris.appendChild(fragment);
}
function blockMaker(){
	stopFalling = false;
	var block = blockArr[Math.floor(Math.random()*7)][2];
	console.log(block);
	block.forEach(function(tr, i){
		tr.forEach(function(td, j){
			tetrisData[i][j+3] = td;
		});
	});
	console.log(tetrisData);
	drawingTable();
}
function drawingTable(){
	tetrisData.forEach(function(tr, i){
		tr.forEach(function(td, j){
			tetris.children[i].children[j].className = blockDict[td][0];
		});
	});
}
function fallingBlock(){
	for (var i=tetrisData.length - 1; i>=0; i--){
		tetrisData[i].forEach(function(td,j){
			if(td > 0 && td < 10){
				if(tetrisData[i+1] && tetrisData[i+1][j] === 0 && !stopFalling){
					tetrisData[i + 1][j] = td;
					tetrisData[i][j] = 0;
				} else {
					stopFalling = true;
					tetrisData[i][j] = td*10;
				}
			}
		})
	}
	if (stopFalling){
		blockMaker();
	}
	drawingTable();
}
window.addEventListener('keydown', function(e){
	switch(e.code){
		case "ArrowRight":
			break;
		case "ArrowLeft":
			break;
		case "ArrowDown":
			break;
		default : break;
	}
})
window.addEventListener('keyup', function(e){
	switch (e.code){
		case "Space":
			break;
		case "ArrowUp":
			break;
		default : break;
	}
})


makeTable();
blockMaker();
setInterval(fallingBlock, 100);