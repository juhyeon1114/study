/*******************************************
 * __proto__
 * 권장 X
 *******************************************/
var superObj = {superVal: 'super'};
var subObj = {subVal: 'sub'};
subObj.__proto__ = superObj;

console.log(subObj.superVal, subObj.subVal);

/*******************************************
 * Object.create()
 * 권장 O
 *******************************************/
var superObj = {superVal: 'super'};
var subObj = Object.create(superObj);
// debugger;
subObj.subVal = 'sub';

console.log(subObj.superVal, subObj.subVal);

/*******************************************
 * examples
 *******************************************/
var kim = {
    name: 'kim',
    first: 1,
    second: 2,
    sum: function(){
        return this.first+this.second;
    }
}
var lee = {
    name: 'lee',
    first: 3,
    second: 4,
    avg: function(){
        return (this.first+this.second)/2;
    }
}
lee.__proto__ = kim;

var park = Object.create(kim);
park.name = 'park';
park.first = 10;
park.second = 20;
park.avg = function(){
    return (this.first+this.second)/2;
}
console.log(lee.sum());
console.log(park.sum());

/*******************************************
 * call & bind
 * -> 사실은 js에서는 함수도 객체이다.
 * -> 모든 함수에는 call()이라는 함수가 있다.
 * -> call과 bind를 통해서 함수 내부에서 사용될 객체를 주입시킬 수 있다.
 *******************************************/
var kim = {name: 'kim', first: 10, second: 20}
var lee = {name: 'lee', first: 1, second: 2}
function sum(prefix){
    console.log(this);
    return prefix+(this.first + this.second);
}

var call = sum.call(kim, 'hello'); // 첫번째 인자 = this, 두번째 인자 = param
console.log(call);

var leeSum = sum.bind(lee, 'bye'); // 첫번째 인자 = this, 두번째 인자 = param
console.log(leeSum);

/*******************************************
 * prototype vs __proto__
 *******************************************/
