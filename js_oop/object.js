var memberArr = ['hello', 'world', 'good', 'morning'];

var memberObj = {
    manager : 'hello',
    developer : 'world',
    designer : 'good',
};

/*******************************************
 * C R
 *******************************************/
console.group('object create & delete');
console.log(memberObj);
memberObj.architecture = 'morning';
console.log(memberObj);
delete memberObj.designer;
console.log(memberObj);
console.groupEnd();

/*******************************************
 * How to loop in Object
 *******************************************/
console.group('object loop');
for (var name in memberObj) {
    console.log(name, memberObj[name]);
}
console.groupEnd();

/*******************************************
 * How to make a Object
 *******************************************/
var MyMath = {
    PI : 3.14,
    random : function () {
        return Math.random();
    },
    floor : function (val) {
        return Math.floor(val);
    }

}

console.group('object loop');
console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(3.8));
console.groupEnd();

/*******************************************
 * this
 *******************************************/
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

console.group('object loop');
console.log(kim.sum(kim.first, kim.second));
console.log(kim.sum2());
console.log(kim.getThis());
console.groupEnd();

/*******************************************
 * constructor
 *******************************************/
