/**
 * 1) 숫자에 콤마 삽입하기 (lv3)
 * https://codingdojang.com/scode/398?answer_mode=hide
 */
// const inputArr = [1000, 20000000, -3245.24, 123400, 1, 20, 355, 12355.12313123, -123, -9, -20];
// let outputArr = []; // 최종 결과를 담을 배열
// inputArr.forEach(num => {
//     const isThisMinus = num < 0; // 음수냐?
//     const stringfiedNum = String(Math.abs(num)); // 숫자를 스트링화
//     const isThisFloat = stringfiedNum.indexOf('.') !== -1; // 소수점이 있냐?
//     const intPart = stringfiedNum.split('.')[0]; // 정수부
//     const floatPart = stringfiedNum.split('.')[1]; // 소수부
    
//     let cnt = 0; 
//     let newStr = ''; // 반점이 추가되서 새롭게 만들어질 값
//     for (let idx=intPart.length-1; idx>=0; idx--) {
//         newStr = intPart[idx] + newStr;
//         cnt += 1;
//         if (cnt >= 3) {
//             if (idx > 0) newStr = ',' + newStr; // 3, 6, 9와 같이 3의 배수만큼의 자릿수를 갖는 숫자는 맨앞에 반점을 붙이지 않는다
//             cnt = 0;
//         }
//     }

//     if (isThisMinus) newStr = '-' + newStr ; // 음수였다면, 맨 앞에 - 붙이기
//     if (isThisFloat) newStr = newStr + '.' + floatPart; // 소수점이 있었다면, 소수점과 소수 이하파트를 붙여주기

//     outputArr.push(newStr);
// });
// console.log(outputArr);

/**
 * 2) 모스부호 해독 (lv2)
 * https://codingdojang.com/scode/469?answer_mode=hide
 */

const inputStr = '.... .  ... .-.. . . .--. ...  . .- .-. .-.. -.--';
const MOS_SET = [
    { alpha : 'a', mos : '.-'},
    { alpha : 'b', mos : '-...'},
    { alpha : 'c', mos : '-.-.'},
    { alpha : 'd', mos : '-..'},
    { alpha : 'e', mos : '.'},
    { alpha : 'f', mos : '..-.'},
    { alpha : 'g', mos : '--.'},
    { alpha : 'h', mos : '....'},
    { alpha : 'i', mos : '..'},
    { alpha : 'j', mos : '.---'},
    { alpha : 'k', mos : '-.-'},
    { alpha : 'l', mos : '.-..'},
    { alpha : 'm', mos : '--'},
    { alpha : 'n', mos : '-.'},
    { alpha : 'o', mos : '---'},
    { alpha : 'p', mos : '.--.'},
    { alpha : 'q', mos : '--.-'},
    { alpha : 'r', mos : '.-.'},
    { alpha : 's', mos : '...'},
    { alpha : 't', mos : '-'},
    { alpha : 'u', mos : '..-'},
    { alpha : 'v', mos : '...-'},
    { alpha : 'w', mos : '.--'},
    { alpha : 'x', mos : '-..-'},
    { alpha : 'y', mos : '-.--'},
    { alpha : 'z', mos : '--..'},
]

const inputArr = inputStr.split(' ');
const outputArr = [];

console.log(inputArr);

inputArr.forEach(s => {
    if (s === '') {
        outputArr.push(' '); // ''는 스페이스바로 바꿔줌
    } else {
        const selectedMos = MOS_SET.find(v => v.mos === s);
        selectedMos ? outputArr.push(selectedMos.alpha) : {} ;
    }
});

console.log(outputArr.join(''));