var row = 4;
var col = 3;
var colorArr = ['red','red','orange','orange','green','green','yellow','yellow','white','white','pink','pink'];
var colors = [];
var len = colorArr.length;
var clickFlag = true;
var clickedCards = [];
var completedCards = [];

for(var i=0; i<len; i++){
	var tempColor = colorArr.splice(Math.floor(Math.random() * colorArr.length),1)[0];
	colors.push(tempColor);
}

function cardSetting (row, col){
	clickFlag = false;
	var cnt = 0;
	for(var i=0; i<col; i++){
		var wrap = document.createElement("div");
		wrap.className = "wrapper";
		for(var j=0; j<row; j++){
			var card = document.createElement("div");
			card.className = "card";
			var cardInner = document.createElement("div");
			cardInner.className = "card-inner";
			var cardFront = document.createElement("div");
			cardFront.className = "card-front";
			var cardBack = document.createElement("div");
			cardBack.className = "card-back";
			cardBack.style.backgroundColor = colors[cnt];

			cardInner.appendChild(cardFront);
			cardInner.appendChild(cardBack);
			card.appendChild(cardInner);
			wrap.appendChild(card);

			(function (c){
				c.addEventListener('click', function(){
					if(clickFlag && !completedCards.includes(c)){
						c.classList.toggle("flipped");
					}
					
					if(c.classList.contains("flipped") && !completedCards.includes(c)){
						clickedCards.push(c);
					}
					
					if(clickedCards.length === 2){
						var firstColor = clickedCards[0].querySelector(".card-back").style.backgroundColor;
						var secondColor = clickedCards[1].querySelector(".card-back").style.backgroundColor;
						if(firstColor == secondColor){
							completedCards.push(clickedCards[0]);
							completedCards.push(clickedCards[1]);
							clickedCards = [];
							if(completedCards.length === 12){
								alert("성공");
							}
						} else {
							clickFlag = false;
							setTimeout(function(){
								clickedCards[0].classList.remove("flipped");
								clickedCards[1].classList.remove("flipped");
								clickFlag = true;
								clickedCards = [];
							}, 500);
							
						}
					} 
					console.log(clickedCards);
				});
			})(card);

			document.body.appendChild(wrap);
			cnt ++;
		}
	}

	document.querySelectorAll(".card").forEach(function(card,index){
		setTimeout(function(){
			card.classList.add("flipped");
		}, 300 + 100 * index);
	});

	setTimeout(function(){
		document.querySelectorAll(".card").forEach(function(card,index){
			card.classList.remove("flipped");
			clickFlag = true;
		});
	}, 3000);

	
}
cardSetting(row,col);