/*******************************************
 * Class
 *******************************************/
console.group('[Class]');

class Person {
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum(){
        return this.first + this.second;
    }
}

var park = new Person('park', 1,2);
var choi = new Person('choi', 4,5);
console.log(park.sum());
console.log(choi.sum());

console.groupEnd();

/*******************************************
 * Inheritance
 *******************************************/
console.group('[Inheritance]');

class Ape {
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum(){
        return this.first + this.second;
    }
}

class Human extends Ape {
    avg(){
        return (this.first+this.second)/2;
    }
    getFirst(){
        return this.first ;
    }
}


var park = new Human('park', 1,2);
var choi = new Human('choi', 4,5);
console.log(park.avg());
console.log(choi.getFirst());

console.groupEnd();

/*******************************************
 * Super
 *******************************************/
console.group('[Super]');

class People {
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum(){
        return this.first + this.second;
    }
}

class Man extends People {
    constructor(name, first, second, third){
        // super() = 부모클래스의 생성자
        // super = 부모 클래스
        super(name, first, second); 
        this.third = third;
    }

    sum(){
        return super.sum()+this.third;
    }

    avg(){
        return (this.first+this.second)/2;
    }
}

var park = new Man('park', 1,2,3);
console.log(park.sum());

console.groupEnd();