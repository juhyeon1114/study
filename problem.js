/**
 * 1 (1)
 * 1~1000에서 각 숫자의 개수 구하기
 * https://codingdojang.com/scode/504?answer_mode=hide
 */
// const NUMBERS = '0123456789';
// let result = Array(10).fill(0); // result === [0,0,0, ... 0,0 ] 0 열개
// const totalStr = Array(1000).fill(0).map((v,idx) => idx+1).join('');
// for (let i=0; i<totalStr.length; i++) {
//     result[NUMBERS.indexOf(totalStr[i])] += 1;
// }
// console.log(result);


/**
 * 2 (1)
 * 게시판 페이징
 * https://codingdojang.com/scode/406?answer_mode=hide
 */
// const total = 11;
// const perPage = 10;
// const result2 = Math.ceil(total/perPage);
// console.log(result2);

/**
 * 3 (2)
 * 1이상 5000미만의 숫자들 중에서 셀프넘버 구하기
 * https://codingdojang.com/scode/365?answer_mode=hide 
 */
// function gen(num){
//   const stringfiedNum = String(num);
//   let result = num;
//   for (let i=0; i<stringfiedNum.length; i++) {
//     result += Number(stringfiedNum[i]);
//   }
//   return result;
// }
// let generated = [];
// for (let i=1; i<5000; i++) {
//   generated.push(gen(i));
// }

// let result3 = 0;
// for (let i=1; i<5000; i++) {
//   if(generated.indexOf(i) === -1) {
//     result3 += i;
//   }
// }
// console.log(result3);

/**
 * 4 (2)
 * 1~10000 까지 8 카운팅하기
 * https://codingdojang.com/scode/393?answer_mode=hide 
 */
// const totalStr4 = Array(10000).fill(0).map((v,idx) => idx+1).join('');
// let result4 = 0;
// console.log(totalStr4.length);
// for (let i=0; i<totalStr4.length; i++) {
//   if (totalStr4[i] === '8') {
//     result4 += 1;
//   }
// }
// console.log(result4);

/**
 * 5 (2)
 * 가장 가까운 점 구하기
 * https://codingdojang.com/scode/408?answer_mode=hide 
 */

/**
 * 6 (2)
 * 문자열 압축하기
 * https://codingdojang.com/scode/465?answer_mode=hide 
 */


/**
 * 7 (3)
 * 나선형 회전 2차원 배열 출력하기
 * https://codingdojang.com/scode/266?answer_mode=hide 
 */
const ROW = 6;
const COL = 6;
const MAX = ROW*COL;
let r = 0;
let c = 0;
let move = 'right';

let arr = Array(ROW).fill(null).map(v => Array(COL).fill(100));
console.log(arr);
for (let i=0; i<MAX; i++) {
    // console.log(i, r, c);
    arr[r][c] = i;
    
    if (arr[r][c+1] === 100) { // 오른쪽으로 이동 가능
        c += 1;
    } else if (arr[r+1] && arr[r+1][c] === 100) { // 아래쪽으로 이동 가능
        r += 1;
    } else if (arr[r][c-1]) { // 왼쪽으로 이동 가능
        c -= 1;
    } else if (arr[r-1][c]) { // 위쪽으로 이동 가능
        r -= 1;
    } else {
        console.log('끝');
        console.log(arr);
    }
    console.log(arr);
}
/**
 * 8 (3)
 * LCD display 만들기
 * https://codingdojang.com/scode/314?answer_mode=hide
 */
