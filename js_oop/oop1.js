var memberArr = ['hello', 'world', 'good', 'morning'];

var memberObj = {
    manager : 'hello',
    developer : 'world',
    designer : 'good',
};

/*******************************************
 * C R
 *******************************************/
console.group('[object create & delete]');
console.log(memberObj);
memberObj.architecture = 'morning';
console.log(memberObj);
delete memberObj.designer;
console.log(memberObj);
console.groupEnd();

/*******************************************
 * How to loop in Object
 *******************************************/
console.group('[object loop]');
for (var name in memberObj) {
    console.log(name, memberObj[name]);
}
console.groupEnd();

/*******************************************
 * How to make a Object
 *******************************************/
console.group('[object loop]');
var MyMath = {
    PI : 3.14,
    random : function () {
        return Math.random();
    },
    floor : function (val) {
        return Math.floor(val);
    }

}

console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(3.8));
console.groupEnd();

/*******************************************
 * this
 *******************************************/
console.group('[object loop]');
var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function(f, s){
        return f + s;
    },
    sum2 : function(){
        return this.first + this.second;
    },
    getThis : function(){
        return this;
    }
}

console.log(kim.sum(kim.first, kim.second));
console.log(kim.sum2());
console.log(kim.getThis());
console.groupEnd();

/*******************************************
 * constructor
 *******************************************/
console.group('[constructor]');
function Person(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}


var kim = new Person('kim', 1,2,3);
var lee = new Person('lee', 4,5,6);
console.log(kim.sum());
console.log(lee.sum());

console.groupEnd();

/*******************************************
 * prototype
 *******************************************/
console.group('[prototype]');
function Human(name, first, second, third) {
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Human.prototype.sum = function(){
    return this.first+this.second+'hello';
}

var park = new Human('park', 1,2,3);
var choi = new Human('choi', 4,5,6);
console.log(park.sum());
console.log(choi.sum());

console.groupEnd();