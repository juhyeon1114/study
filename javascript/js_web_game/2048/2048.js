var table = document.getElementById("table");
var data = [];
var tempData = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var gameNum = 4;
var scoreField = document.getElementById("score");
var score = 0;

function initializing(){
	var fragment = document.createDocumentFragment();
	[1,2,3,4].forEach(function(){
		var colData = [];
		data.push(colData);
		var tr = document.createElement("tr");
		[1,2,3,4].forEach(function(){
			colData.push(0);
			var td = document.createElement("td");
			tr.appendChild(td);
		});
		fragment.appendChild(tr);
	});
	table.appendChild(fragment);
}
function randomGenerate(){
	var emptyArr = [];
	data.forEach(function(colData, i){
		colData.forEach(function(rowData, j){
			if(!rowData){
				emptyArr.push([i, j]);
			}
		});
	});
	if (emptyArr.length !== 0){
		var randomCell = emptyArr[Math.floor(Math.random() * emptyArr.length)];
		data[randomCell[0]][randomCell[1]] = 2;
		drawing();
	} else {
		checkOver() ? alert("game over") : null;
	}
}
function drawing(){
	data.forEach(function(colData, i){
		colData.forEach(function(rowData, j){
			table.children[i].children[j].textContent = rowData > 0 ? rowData : "";
		});
	});
}
initializing();
randomGenerate();
drawing();

var cnt = 0;
var oneBtnFlag = true; //꾹 눌리는 거 막기. true=누를수있음. false=꾹누르는중
window.addEventListener('keydown', function(v){
	// 37,38,39,40
	if(oneBtnFlag){
		if(v.keyCode === 37){ //왼
			for(var row=0; row<gameNum; row++){
				for (var col = gameNum-1; col>0; col--){
					col = plus(row,col,0,-1)[1];
				}
			}
			for(var row=0; row<gameNum; row++){
				cnt=0;
				for (var col = 0; col<=gameNum-1; col++){
					resorting(row,col,0,-1);
				}
			}
		} else if(v.keyCode === 38){ //위
			for(var col=0; col<gameNum; col++){
				for (var row = gameNum-1; row>0; row--){
					row = plus(row,col,-1,0)[0];
				}
			}
			for(var col=0; col<gameNum; col++){
				cnt=0;
				for (var row = 0; row<=gameNum-1; row++){
					resorting(row,col,-1,0);
				}
			}
		} else if(v.keyCode === 39){ //오
			for(var row=0; row<gameNum; row++){
				for (var col = 0; col<gameNum-1; col++){
					col = plus(row,col,0,1)[1];
				}
			}
			for(var row=0; row<gameNum; row++){
				cnt = 0;
				for (var col = gameNum-1; col>=0; col--){
					resorting(row,col,0,1);
				}
			}
		} else if(v.keyCode === 40){ //아래
			for(var col=0; col<gameNum; col++){
				for (var row = 0; row<gameNum-1; row++){
					row = plus(row,col,1,0)[0];
				}
			}
			for(var col=0; col<gameNum; col++){
				cnt=0;
				for (var row = gameNum-1; row>=0; row--){
					resorting(row,col,1,0);
				}
			}
		}
		if(v.keyCode===37 || v.keyCode===38 || v.keyCode===39 || v.keyCode===40){
			injectData();
			drawing();
			oneBtnFlag = false;
			randomGenerate();	
		}
	}
})
window.addEventListener('keyup', function(v){
	if(v.keyCode===37 || v.keyCode===38 || v.keyCode===39 || v.keyCode===40){
		oneBtnFlag = true;
	}
})
function plus(row,col,verDir,horDir){
	var currentCell = data[row][col];
	var nextCell = data[row+verDir][col+horDir];
	if (currentCell !== 0){
		if(nextCell === 0){ //다음칸이 0인 경우, 이동
			data[row][col] = 0;
			data[row+verDir][col+horDir] = currentCell;
		} else if (currentCell === nextCell){ //둘이 더해서 nextCell 위치로 이동
			data[row][col] = 0;
			data[row+verDir][col+horDir] = currentCell*2;
			score += currentCell*2;
			scoreField.textContent = score;
			if(verDir===-1){row--;} else if(verDir===1){row++;}
			if(horDir===-1){col--;} else if(horDir===1){col++;}
		}
	}
	var tempArr = [row,col];
	return tempArr;
}
function resorting(row,col,verDir,horDir){
	var currentCell = data[row][col];
	if(currentCell !== 0){
		if(verDir === -1){
			tempData[cnt][col] = currentCell;
		} else if (verDir === 1) {
			tempData[gameNum-1-cnt][col] = currentCell;
		}
		if(horDir === -1){
			tempData[row][cnt] = currentCell;
		} else if(horDir === 1){
			tempData[row][gameNum-1-cnt] = currentCell;
		}
		cnt ++;
	}
}
function injectData(){
	data = tempData;
	tempData = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
}
function checkOver(){
	for (var i=0; i<gameNum-1; i++){
		for(var j=0; j<gameNum; j++){
			if (data[i][j] === data[i+1][j]){
				return false;
			}
		}
	}
	for (var i=0; i<gameNum-1; i++){
		for(var j=0; j<gameNum; j++){
			if (data[j][i] === data[j][i+1]){
				return false;
			}
		}
	}
	return true;
}