/*
[명령어]
tsc --init : tsconfig.json (타입스크립트컴파일러 옵션 세팅파일) 생성
tsc app --watch
*/

/*
[타입]
1. Primitive types or Simple types
    -> number, string, boolean, null, undefined
*/
let cnt : number = 3;
let color : string = 'blue';
let code : number | string ;
code = 3;
code = 'hello';
let isDone : boolean = false;
let _null : null = null;
let _undefined : undefined = undefined;
let username : string | undefined;

/*
2. Non-primitive types or Complex types
    -> Array, Object, Tuple, Enum
*/
let ages : Array<number> = [20,21,22];
let _ages : number[] = [30,31,32];
let names : Array<string> = ['k','j','h'];
let _names : string[] = ['juhyeon','hello'];
let obj : Object = {name : 'kjh', age : 26};
// 이하는 타입스크립트에서 추가된 타입 스펙
let member : [string, number] = ['k',1];
enum Books {
    Comics = 100,   //100 (인덱스)
    Ani,            //101
    Fantasy,        //102
    Science,        //103
    Js = 200,       //200
    Python,         //201
    Korea = 300,    //300
    Japan,          //301
    USA,            //302
} // -> enum은 배열 또는 객체처럼 호출할 수 있다. 
let kimchi : any = {
    code : Books.Korea,
    category : Books[300],
}
console.log(kimchi);

/*
3. Special types of TS
    -> Any, Void, Never
*/
let any : any ; //아무 타입이나 선언 가능
any = 123;
any = 'hello';
any = [1,3,4,5];
any = false;

let v : void; // null, undefined만 할당 가능.
let _void = function() : void {
    console.log('void');
}
_void();

let n : never; // 메모리에 아무것도 할당되지 않음(에러 던지는 용도).
let err = function(msg : string): never {
    throw new Error(msg);
} // -> 아무것도 return 하지 않을 때 사용함

err('에러발생');