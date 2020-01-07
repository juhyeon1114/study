/*
[명령어]
tsc --init : tsconfig.json (타입스크립트컴파일러 옵션 세팅파일) 생성
tsc app --watch
*/
function getSum(num1, num2) {
    return num1 + num2;
}
console.log(getSum(1, 2));
function getMergeString(str1, str2) {
    return str1 + str2;
}
console.log(getMergeString('1', '2'));
function isSet(arg) {
    return arg ? true : false;
}
console.log(isSet(''));
console.log(isSet('asdasd'));
function getNull(arg) {
    console.log(arg);
    return null;
}
getNull('');
function getArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(getArray('hi', 'hello', 'bye'));
