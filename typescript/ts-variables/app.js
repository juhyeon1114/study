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
var cnt = 3;
var color = 'blue';
var code;
code = 3;
code = 'hello';
var isDone = false;
var _null = null;
var _undefined = undefined;
var username;
/*
2. Non-primitive types or Complex types
    -> Array, Object, Tuple, Enum
*/
var ages = [20, 21, 22];
var _ages = [30, 31, 32];
var names = ['k', 'j', 'h'];
var _names = ['juhyeon', 'hello'];
var obj = { name: 'kjh', age: 26 };
// 이하는 타입스크립트에서 추가된 타입 스펙
var member = ['k', 1];
var Books;
(function (Books) {
    Books[Books["Comics"] = 100] = "Comics";
    Books[Books["Ani"] = 101] = "Ani";
    Books[Books["Fantasy"] = 102] = "Fantasy";
    Books[Books["Science"] = 103] = "Science";
    Books[Books["Js"] = 200] = "Js";
    Books[Books["Python"] = 201] = "Python";
    Books[Books["Korea"] = 300] = "Korea";
    Books[Books["Japan"] = 301] = "Japan";
    Books[Books["USA"] = 302] = "USA";
})(Books || (Books = {})); // -> enum은 배열 또는 객체처럼 호출할 수 있다. 
var kimchi = {
    code: Books.Korea,
    category: Books[300]
};
console.log(kimchi);
/*
3. Special types of TS
    -> Any, Void, Never
*/
var any; //아무 타입이나 선언 가능
any = 123;
any = 'hello';
any = [1, 3, 4, 5];
any = false;
var v; // null, undefined만 할당 가능.
var _void = function () {
    console.log('void');
};
_void();
var n; // 메모리에 아무것도 할당되지 않음(에러 던지는 용도).
var err = function (msg) {
    throw new Error(msg);
}; // -> 아무것도 return 하지 않을 때 사용함
err('에러발생');
