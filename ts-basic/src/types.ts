const num: number = 1; // 5.3, -10 ...
const str: string = 'hello world';
const trueFalse: boolean = true;

enum Auth { ADMIN = 'admin', EDITOR = 'editor', NORMAL = 0 };
const person: { // object
    name: string;
    age: number;
    hobbies: string[];
    // role: (string | number)[];
    role: [number, string];
    auth: Auth;
} = {
    name: 'kim',
    age: 28,
    hobbies: ['sports', 'cooking'], // array
    role: [2, 'author'], // tuple
    auth: Auth.ADMIN,
};
console.log(person.name);

/**
 * simple example
 */
function add2 (n1: number, n2: number, showResult: boolean): string | number {
    return showResult ? n1 + n2 : 'hide';
}
const number1 = '5';
const number2 = 2.8;
const printResult = true;
console.log(add2(+number1, +number2, printResult));

/**
 * type aliases
 */
type Combinable = number | string;

/**
 * union types
 */
function combine(input1: Combinable, input2: Combinable) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') result = input1 + input2;
    else result = input1.toString() + input2.toString();
    return result;
}

const combinedAges = combine(30, 26);
const combinedName = combine('hello', 'world');
console.log(combinedAges, combinedName);

/**
 * never types : 절대 return 할 일이 없는 함수 
 */
function generateError(message: string, code: number): never {
    throw { message, code };
}
