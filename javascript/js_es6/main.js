/***  ex6 문법 & 사용법 ***/

// let 
var list = document.querySelectorAll('li');
for(let i=0; i<list.length; i++){ // i변수를 var가 아닌 let으로 선언해줌으로써 클로저 문제 해결
    list[i].addEventListener("click", function(){
        console.log(i+1+'번째 리스트');
    });
}
console.log("-------------");

// ***es6 string 새로운 메서드들
let str = "hello world ! ^^";
let matchstr_s = "hello";
let matchstr_e = "^^^";
console.log(str.startsWith(matchstr_s)); // 해당 문자열이 어떤 단어로 시작하는지 알 수 있다.
console.log(str.endsWith(matchstr_e)); // 해당 문자열이 어떤 단어로 끝나는지 알 수 있다.
console.log(str.includes("world")); // 특정 문자열을 포함하고 있는지 알 수 있다.
console.log("-------------");

// ***for of 순회하기
var data = [1,2,undefined,NaN,null,''];
for(let value of data){
    console.log(value);
}
console.log("-------------");

// ***spread operator. 펼침 연산자.
let pre = ["apple", "orange", 100];
let newData = [...pre];
console.log(...pre); //배열을 spread함
console.log(pre);
console.log(newData);
console.log(pre === newData);

function sum(a,b,c){
    return a+b+c;
}
let preArr = [100,200,300];
console.log(sum(...preArr));
console.log("-------------");

// ***from 메서드
function addMark(){
    let newData = [];
    for(let i=0; i<arguments.length; i++){
        newData.push(arguments[i] + "!");
        // arguments는 배열과 유사하지만, 배열은 아님
        // arguments는 함수의 매개변수를 가리킴. 불확실한 매개변수를 받을 때 유용
    }
    console.log(newData);
}
addMark(1,2,3,4,5);
function addMark2(){
    let newArr = Array.from(arguments); //가짜(유사)배열을 진짜 배열로 바꾸고 싶은 경우에 from을 사용한다.
    let newData = newArr.map(function(value){
        return value + "!";
    });
    console.log(newData);
}
addMark2(1,2,3,4,5);
console.log("-------------");

// ***Destructuring -> 배열 또는 객체에서 원하는 값만을 뽑아낼 수 있다.
let data2 = ["a","b","c","d"];
let [hi,,hello] = data2;
console.log(hi, hello);

let obj2 = {
    name : 'kjh',
    address : 'korea',
    age : 26,
}
let {name, age} = obj2;
console.log(name, age);
let {name: myName, age: myAge} = obj2;
console.log(myName, myAge);
console.log("-------------");

// ***Destructuring example -> json 파싱
const articles = [
    {
        title : "hello",
        description : "hi everyone, good luck!!!",
    },
    {
        title : "bye",
        description : "see you again, good night :)",
    }
];
let [,bye] = articles;
console.log(bye);
let {title, description} = bye;
console.log(title, description);
let [{title:a,description:b},] = articles;
console.log(a,b);
console.log("-------------");

// ***Set -> 중복없이 저장함
let mySet = new Set();
console.log(toString.call(mySet)); //[object set] 이라는 형식임.
mySet.add("k");
mySet.add("j");
mySet.add("k");
console.log(mySet);
console.log(mySet.has("k"));
console.log(mySet.has("h"));
mySet.delete('k');
console.log(mySet);
console.log("-------------");

// ***WeakSet -> 참조를 갖고 있는 객체만 저장 가능한 Set / 객체형태를 중복없이 저장하려고 할때 유용함.
let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj3 = {arr, arr2};
let ws = new WeakSet();
//ws.add(111);
//ws.add('111'); //-> 이와 같이 참조가 없는 값들은 add 불가
ws.add(arr);
ws.add(arr2);
ws.add(obj3);
console.log(ws);
arr = null;
console.log(ws.has(arr), ws.has(arr2)); //return == false true
// -> arr 은 참조를 잃었으므로 가비지 컬렉션의 대상이 된다. 
// 콘솔을 찍어보면 ws에 arr이 있는 것 같지만 실질적으로는 없는 것과 같다.
console.log("-------------");

// ***Map & WeakMap (이 부분 잘 모르겠음)
// Array ==변형==> set, weakSet
// Object ==변형==> map, weakMap
// map 은 key/value
let wm = new WeakMap();
let myfun = function(){};

wm.set(myfun,0);
console.log(wm);

let cnt = 0;
for(let i=0; i<10; i++){
    cnt = wm.get(myfun);
    cnt++;
    wm.set(myfun, cnt);
}
console.log(wm);
console.log("-------------");

// ***template처리
const data3 = [
    {
        name : 'coffee-bean',
        order : true,
        items : ['americano','milk','green-tea'],
    },
    {
        name : 'starbucks',
        order : false,
    }
];

const tmeplate = `<div>welcome ${data3[0].name} !!</div>`;
console.log(tmeplate);
console.log("-------------");

// ***arrow function
// 'this' context of Arrow function
const myObj = {
    runTimeout(){
        setTimeout(function(){
            this.printData();
        }.bind(this), 200); //일반 함수인 경우 scope문제 때문에 bind해줘야한다.
    },
    printData(){
        console.log("hello");
    }
}
myObj.runTimeout();
const myObj2 = {
    runTimeout(){
        setTimeout(()=>{
            this.printData();
        }, 200); // arrow함수를 사용할 경우 bind를 해주지 않아도 됨. 왜냐하면, 이벤트 큐에 context를 유지하며 저장됨.
    },
    printData(){
        console.log("hello");
    }
}
myObj2.runTimeout();
console.log("-------------");

// ***class -> 모습은 클래스지만 실질적으로는 function prototype
class Health {
    constructor (name, lastTime){
        this.name = name;
        this.lastTime = lastTime;
    }
    showHealth() {
        console.log("안녕하세요" + this.name);
    }

}
const myHealth = new Health('kjh',100);
myHealth.showHealth();
