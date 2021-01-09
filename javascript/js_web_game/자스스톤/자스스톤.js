var rival = {
	hero: document.getElementById("rival-hero"),
	deck: document.getElementById("rival-deck"),
	field: document.getElementById("rival-cards"),
	cost: document.getElementById("rival-cost"),
	deckData: [],
	heroData: [],
	fieldData: [],
	selectedCard: null,
	selectedCardData: null,
}
var me = {
	hero: document.getElementById("my-hero"),
	deck: document.getElementById("my-deck"),
	field: document.getElementById("my-cards"),
	cost: document.getElementById("my-cost"),
	deckData: [],
	heroData: [],
	fieldData: [],
	selectedCard: null,
	selectedCardData: null,
}
var turn = true; //true면 내턴 false면 네턴
var turnBtn = document.getElementById("turn-button");
function deckToField (data, card){
	var obj = turn ? me : rival;
	var nowCost = Number(obj.cost.textContent);
	if (card.classList.contains("card-turnover")){
		return;
	}
	if (obj.fieldData.indexOf(data) != -1 || obj.heroData === data){
		eraseFields("card-selected");
		if(obj.selectedCard == card){
			obj.selectedCard = null;
			obj.selectedCardData = null;
		} else {
			card.classList.toggle("card-selected");
			obj.selectedCard = card;
			obj.selectedCardData = data;
		}
	}

	if(nowCost < data.cost){
		return;
	}
	if(obj.deckData.indexOf(data) != -1){
		var idx = obj.deckData.indexOf(data);
		obj.deckData.splice(idx,1);
		obj.fieldData.push(data);
		obj.deck.innerHTML = "";
		obj.field.innerHTML = "";
		obj.fieldData.forEach(function(data){
			connecting(data, obj.field, false);
		})
		obj.deckData.forEach(function(data){
			connecting(data, obj.deck, false);
		})
		obj.cost.textContent = nowCost - data.cost; //코스트 빼주기
		generateDeck(1,turn);
	}
}
function connecting (data, dom, hero){
	var card = document.querySelector(".card-hidden .card").cloneNode(true);
	card.querySelector(".card-cost").textContent = data.cost;
	card.querySelector(".card-att").textContent = data.att;
	card.querySelector(".card-hp").textContent = data.hp;
	if (hero){
		card.querySelector(".card-cost").style.display = 'none';
		var name = document.createElement("div");
		name.textContent = "영웅";
		card.appendChild(name);
	}
	dom.appendChild(card);
	card.addEventListener('click', function(v){
		deckToField(data,card);
		if(turn){
			if (rival.fieldData.indexOf(data) != -1 || rival.heroData === data){
				fighting(me,data,card,turn);
			}
		} else {
			if (me.fieldData.indexOf(data) != -1 || me.heroData === data){
				fighting(rival,data,card,turn);
			}
		}
	})
}
function reDrawing (object){
	var obj = object;
	obj.field.innerHTML = "";
	obj.fieldData.forEach(function(data){
		connecting(data, obj.field, false);
	})
}
function fighting (nowObj, data, card){
	if(!nowObj.selectedCardData){return;}
	//data = 공격받은 카드, nowObj =  공격한 카드
	data.hp -= nowObj.selectedCardData.att;
	nowObj.selectedCardData.hp -= data.att;
	card.querySelector(".card-hp").textContent = data.hp;
	nowObj.selectedCard.querySelector(".card-hp").textContent = nowObj.selectedCardData.hp;

	/*죽음 or 게임 종료 판단*/
	if (me.heroData.hp <= 0 && rival.heroData.hp <= 0){
		alert("무승부"); return;
	} else if(me.heroData.hp <= 0 && rival.heroData.hp > 0){
		alert("상대가 이김"); return;
	} else if(me.heroData.hp > 0 && rival.heroData.hp <= 0){
		alert("내가 이김"); return;
	}

	if(nowObj.selectedCardData.hp <= 0){
		judgeDeath(nowObj.selectedCardData);
	}
	if(data.hp <= 0){
		judgeDeath(data);
	}
	nowObj.selectedCard.classList.add("card-turnover");
	nowObj.selectedCard.classList.remove("card-selected");
	nowObj.selectedCardData = null;
}
function judgeDeath (object){
	var rivalIdx = rival.fieldData.indexOf(object);
	if(rivalIdx != -1){
		rival.fieldData.splice(rivalIdx,1);
		reDrawing(rival);
	}
	var meIdx = me.fieldData.indexOf(object);
	if(meIdx != -1){
		me.fieldData.splice(meIdx,1);
		reDrawing(me);
	}
}
function generateDeck (num, turn){
	var obj = turn ? me : rival;
	for(var i=0; i< num; i++){
		obj.deckData.push(cardFactory());
	}
	obj.deck.innerHTML = '';
	obj.deckData.forEach(function(data){
		connecting(data, obj.deck, false);
	})
}
function generateHero(turn){
	var obj = turn ? me : rival;
	obj.heroData = cardFactory(true);
	connecting(obj.heroData, obj.hero, true);
}
function Card(hero){
	if(hero){
		this.att = Math.ceil(Math.random() * 2);
		this.hp = Math.ceil(Math.random() * 5)+25;
		this.hero = true;
	} else {
		this.att = Math.ceil(Math.random() * 5);
		this.hp = Math.ceil(Math.random() * 5);
		this.cost = Math.floor((this.att+this.hp)/2);
	}
}
function cardFactory(hero){
	return new Card(hero);
}
function initialSetting(){
	generateDeck(5,false);
	generateDeck(5,true);
	generateHero(false);
	generateHero(true);
}
function eraseFields (className) {
	me.field.querySelectorAll(".card").forEach(function(v){
		v.classList.remove(className);
	})
	me.hero.querySelector(".card").classList.remove(className);
	rival.field.querySelectorAll(".card").forEach(function(v){
		v.classList.remove(className);
	})
	rival.hero.querySelector(".card").classList.remove(className);
}

initialSetting(); //시작점

turnBtn.addEventListener('click', function(){
	turn = !turn;
	document.getElementById('rival').classList.toggle("turn");
	document.getElementById('my').classList.toggle("turn");
	eraseFields("card-selected");
	eraseFields("card-turnover");
	me.cost.textContent = 10; rival.cost.textContent = 10;
	me.selectedCard = null; rival.selectedCard = null;
})