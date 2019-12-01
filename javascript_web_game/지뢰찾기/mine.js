var tbody = document.querySelector("#table tbody");
var dataset = [];

document.querySelector("#exec").addEventListener("click",function(){
	tbody.innerHTML = ''; // 테이블 초기화
	dataset = []; // 데이터 초기화
	var hor = parseInt(document.querySelector("#hor").value);
	var ver = parseInt(document.querySelector("#ver").value);
	var mine = parseInt(document.querySelector("#mine").value);
	var stopFlag = false;
	
	/*0~99까지 숫자를 갖고 있는 배열 만들기*/
	var tempArr = Array(hor * ver);
	tempArr = tempArr.fill().map(function(item,index,array){
		return index;
	});

	/*피셔-예이츠 알고리즘*/
	var shuffleArr = [];
	while(tempArr.length > hor*ver - mine){
		var randNum = tempArr.splice(Math.floor(Math.random() * tempArr.length),1)[0];
		shuffleArr.push(randNum);
	}

	/*테이블 만들기*/
	for(var i=0; i < ver; i+=1){
		var arr = [];
		dataset.push(arr);
		var tr = document.createElement("tr");
		for(var j=0; j < hor; j+=1){
			arr.push(1);
			var td = document.createElement('td');
			/*마우스 오른쪽 이벤트 리스너*/
			td.addEventListener('contextmenu', function(e){
				if (stopFlag){
					return;
				}
				e.preventDefault();
				var parentTr = e.currentTarget.parentNode;
				var parentTbody = e.currentTarget.parentNode.parentNode;
				var cell = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
				var line = Array.prototype.indexOf.call(parentTbody.children, parentTr);
				if(e.currentTarget.textContent === "" || e.currentTarget.textContent === "x"){
					e.currentTarget.textContent = "!";
				} else if (e.currentTarget.textContent === "!") {
					e.currentTarget.textContent = "?";
				} else if (e.currentTarget.textContent === "?") {
					if (dataset[line][cell] === "x"){
						e.currentTarget.textContent = "x";
					} else {
						e.currentTarget.textContent = "";
					}
				}}) // 비동기 오류를 막기위해 td를 만드는 순간, 이벤트 리스너도 추가
			/*클릭 이벤트 리스너*/
			td.addEventListener('click', function(e){
				if (stopFlag){
					return;
				}
				var parentTr = e.currentTarget.parentNode;
				var parentTbody = e.currentTarget.parentNode.parentNode;
				var cell = Array.prototype.indexOf.call(parentTr.children, e.currentTarget);
				var line = Array.prototype.indexOf.call(parentTbody.children, parentTr);
				e.currentTarget.classList.add("opened");
				if(dataset[line][cell] === 'x'){
					e.currentTarget.textContent = "펑";
					stopFlag = true;
				} else if (dataset[line][cell] === 1){
					dataset[line][cell] = 0;
					if(line === 0){
						var mineNumArr = [
							dataset[line][cell-1],					dataset[line][cell+1] ,
							dataset[line+1][cell-1],dataset[line+1][cell],dataset[line+1][cell+1]
						]
					} else if (line === hor-1){
						var mineNumArr = [
							dataset[line-1][cell-1],dataset[line-1][cell],dataset[line-1][cell+1],
							dataset[line][cell-1],					dataset[line][cell+1]
						]
					} else {
						var mineNumArr = [
							dataset[line-1][cell-1],dataset[line-1][cell],dataset[line-1][cell+1],
							dataset[line][cell-1],					dataset[line][cell+1] ,
							dataset[line+1][cell-1],dataset[line+1][cell],dataset[line+1][cell+1]
						]
					}
					mineNumArr = mineNumArr.filter(function(n){
						return n === "x";
					});

					if (mineNumArr.length === 0){
						//주변칸 열기
						var surroundArr = [];
						if(line === 0){
							var surroundArr = [
								tbody.children[line].children[cell-1],					tbody.children[line].children[cell+1] ,
								tbody.children[line+1].children[cell-1],tbody.children[line+1].children[cell],tbody.children[line+1].children[cell+1]
							]
						} else if (line === hor-1){
							var surroundArr = [
								tbody.children[line-1].children[cell-1],tbody.children[line-1].children[cell],tbody.children[line-1].children[cell+1],
								tbody.children[line].children[cell-1],					tbody.children[line].children[cell+1]
							]
						} else {
							var surroundArr = [
								tbody.children[line-1].children[cell-1],tbody.children[line-1].children[cell],tbody.children[line-1].children[cell+1],
								tbody.children[line].children[cell-1],					tbody.children[line].children[cell+1] ,
								tbody.children[line+1].children[cell-1],tbody.children[line+1].children[cell],tbody.children[line+1].children[cell+1]
							]
						}
						//배열 내의 undefined, null, ""와 같은 것들을 필터링
						surroundArr = surroundArr.filter(function(v){return !!v;}) 
						surroundArr.forEach(function(v){
							v.click();
						});
					} else {
						e.currentTarget.textContent = mineNumArr.length;
					}
				}

				console.log(dataset);

			})
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	}
	
	/*지뢰 심기*/
	for(var k=0; k < shuffleArr.length; k++){
		var row = Math.floor(shuffleArr[k] / hor);
		var col = shuffleArr[k] % hor;
		
		// tbody.children[row].children[col].textContent = 'x';

		dataset[row][col] = 'x';
	}
})



