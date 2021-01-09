/*팩토리패턴과 프로토 타입*/
var prototype1 = {
	type: 카드,
	attack: function(){}
	defend: function(){}
};

/*__proto__ 사용은 비추*/
function cardFactory (name,att,hp){
	var card = {
		name: name,
		att: att,
		hp: hp,
	}
	card.__proto__ = prototype1;
	return card; 
} 

//-----------------------------------

/*개선*/
function cardFactory2 (name,att,hp){
	var card = Object.create(prototype1);
	card.name = name;
	card.att = att;
	card.hp = hp;
	return card;
}


/*생성자를 이용한 객체 생성*/
var prototype2 = {
	type: '카드',
}

function Card(name, att, hp){
	this.name = name;
	this.att = att;
	this.hp = hp;
}
Card.prototype = prototype2;

card1 = new Card("kim",10,20);
catd2 = new Card("lee",20,10);
