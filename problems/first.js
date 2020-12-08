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
// const total = 1213;
// const perPage = 9;
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
// console.log('generated: ', generated)
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
// for (let i=0; i<totalStr4.length; i++) {
//     totalStr4[i] === '8' ? result4 += 1: {};
// }
// console.log(result4);

/**
 * 5 (2)
 * 가장 가까운 점 구하기
 * https://codingdojang.com/scode/408?answer_mode=hide 
 */
// const numbers = [1, 3, 4, 8, 13, 17, 20]
// let diffArr = [];

// for (let idx=0; idx<numbers.length-1; idx++) {
//     const temp = numbers[idx] - numbers[idx+1];
//     const diff = temp > 0 ? temp : temp*(-1) ;
//     diffArr.push({ index: idx, diff });
// }
// const sortedArr = diffArr.sort((a,b) => a.diff - b.diff);
// console.log('수 : ', numbers[sortedArr[0].index], numbers[sortedArr[0].index + 1]);
// console.log('차이 : ', sortedArr[0].diff);


/**
 * 6 (2)
 * 문자열 압축하기
 * https://codingdojang.com/scode/465?answer_mode=hide 
 */
// const INPUT = 'aaabbccccccaa';
// let alpha = INPUT[0];
// let cnt = 1;
// let str = '';

// for (let i=1; i<INPUT.length; i++) {
//     if (alpha === INPUT[i]) { // 이전 알페벳 === 현재 알파벳
//         if (i === INPUT.length-1) str += `${alpha}${cnt+1}`; //끝
//         else cnt += 1;
//     } else { // 이전 알페벳 !== 현재 알파벳
//         if (i === INPUT.length-1) str += `${alpha}${cnt}${INPUT[i]}1`; //끝
//         else {
//             str += `${alpha}${cnt}`;
//             cnt = 1;
//             alpha = INPUT[i];
//         }
//     }
// }
// console.log(str);

/**
 * 7 (3)
 * 나선형 회전 2차원 배열 출력하기
 * https://codingdojang.com/scode/266?answer_mode=hide 
 */
// const ROW = 5;
// const COL = 5;
// const MAX = ROW*COL;
// const TOP = 'top';
// const BOTTOM = 'bottom';
// const RIGHT = 'right';
// const LEFT = 'left';
// let r = 0;
// let c = 0;
// let moveFlag = 'right';
// let arr = Array(ROW).fill(null).map(v => Array(COL).fill(100));

// const canGoArr = () => {
//     let result = [];
//     if (arr[r-1] && arr[r-1][c] === 100) result.push(TOP);
//     if (arr[r+1] && arr[r+1][c] === 100) result.push(BOTTOM);
//     if (arr[r][c-1] === 100) result.push(LEFT);
//     if (arr[r][c+1] === 100) result.push(RIGHT);
//     return result; // 갈 수 있는 방향이 담긴 array
// }

// let i = 0;
// while(true){
//     const dirArr = canGoArr(); // dirArr ===  내가 갈 수 있는 방향이 담긴 array
//     if (i >= ROW*COL) break; 
    
//     if (dirArr.indexOf(moveFlag) === -1) { // 내가 가던 방향으로 갈 수 없다
//         if (dirArr.length > 0) {
//             if (moveFlag == RIGHT) moveFlag = BOTTOM;
//             else if (moveFlag == BOTTOM) moveFlag = LEFT;
//             else if (moveFlag == LEFT) moveFlag = TOP;
//             else if (moveFlag == TOP) moveFlag = RIGHT;
//             continue;
//         } else { // 갈 수 있는 방향이 없는 것은 최종지점
//             arr[r][c] = ROW*COL;
//             i += 1;
//         }
//     } else { // 내가 가던 방향으로 갈 수 있다면, 계속 간다
//         arr[r][c] = i+1;
//         if (moveFlag == RIGHT) c += 1;
//         else if (moveFlag == BOTTOM) r += 1;
//         else if (moveFlag == LEFT) c -= 1;
//         else if (moveFlag == TOP) r -= 1;
//         i += 1;
//     }
// }
// console.log(arr);

/**
 * 8 (3)
 * LCD display 만들기
 * https://codingdojang.com/scode/314?answer_mode=hide
 */
// const printArr = () => {
//     arr.forEach(row => {
//         console.log(row.join(''));
//     });
// }
// const VER = '_';
// const HOR = '|';
// const NUM = 4;
// const INPUT = '15';
// const DICTIONARY = {
//     '1' : {
//         top: false,
//         up: 'R',
//         middle: false,
//         under: 'R',
//         bottom: false,
//     },
//     '2' : {
//         top: true,
//         up: 'R',
//         middle: true,
//         under: 'L',
//         bottom: true,
//     },
//     '3' : {
//         top: true,
//         up: 'R',
//         middle: true,
//         under: 'R',
//         bottom: true,
//     },
//     '4' : {
//         top: false,
//         up: 'RL',
//         middle: true,
//         under: 'R',
//         bottom: false,
//     },
//     '5' : {
//         top: true,
//         up: 'L',
//         middle: true,
//         under: 'R',
//         bottom: true,
//     },
//     '6' : {
//         top: true,
//         up: 'L',
//         middle: true,
//         under: 'RL',
//         bottom: true,
//     },
//     '7' : {
//         top: true,
//         up: 'RL',
//         middle: false,
//         under: 'R',
//         bottom: false,
//     },
//     '8' : {
//         top: true,
//         up: 'RL',
//         middle: true,
//         under: 'RL',
//         bottom: true,
//     },
//     '9' : {
//         top: true,
//         up: 'RL',
//         middle: true,
//         under: 'R',
//         bottom: true,
//     },
//     '0' : {
//         top: true,
//         up: 'RL',
//         middle: false,
//         under: 'RL',
//         bottom: true,
//     }
// }
// let arr = Array(7).fill(null).map(v => Array(INPUT.length*NUM + INPUT.length*2).fill(' '));
// for (let idx=0; idx<INPUT.length; idx++) { //인풋넘버를 하나씩 골라서 돌아
//     const selectedNum = INPUT[idx];
//     const dict = DICTIONARY[selectedNum];
//     const start = idx*(NUM+2);
//     const end = (idx+1)*(NUM+2) - 1;
//     for (let j=start+1; j<end; j++) {
//         if (dict.top) arr[0][j] = VER;
//         if (dict.up) {
//             if (dict.up.indexOf('R') !== -1) {
//                 for (let k=0; k<NUM; k++) {
//                     arr[k+1][end] = HOR;
//                 }
//             }
//             if (dict.up.indexOf('L') !== -1) {
//                 for (let k=0; k<NUM; k++) {
//                     arr[k+1][start] = HOR;
//                 }
//             }
//         }
//         if (dict.middle) arr[(arr.length-1)/2][j] = VER;
//         if (dict.under) {
//             if (dict.under.indexOf('R') !== -1) {
//                 for (let k=0; k<NUM; k++) {
//                     arr[(arr.length-1)/2+k+1][end] = HOR;
//                 }
//             }
//             if (dict.under.indexOf('L') !== -1) {
//                 for (let k=0; k<NUM; k++) {
//                     arr[(arr.length-1)/2+k+1][start] = HOR;
//                 }
//             }
//         }
//         if (dict.bottom) arr[arr.length-1][j] = VER;
//     }
// }
// printArr();