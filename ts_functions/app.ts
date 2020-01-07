/*
[명령어]
tsc --init : tsconfig.json (타입스크립트컴파일러 옵션 세팅파일) 생성
tsc app --watch
*/

function getSum(num1:number, num2:number):number {
    return num1 + num2;
}
console.log(getSum(1,2));

function getMergeString(str1: string, str2: string): string{
    return str1 + str2;
}
console.log(getMergeString('1','2'));

function isSet(arg: any): boolean{
    return arg ? true : false ; 
}
console.log(isSet(''));
console.log(isSet('asdasd'));

function getNull(arg: any): null{
    console.log(arg);
    return null ;
}
getNull('');

function getArray(...args: Array<string>): Array<string> {
    return args;
}

console.log(getArray('hi','hello','bye'));