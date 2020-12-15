/**
 * 1) 앞뒤가 같은 수 lv3
 * https://codingdojang.com/scode/401?answer_mode=hide
 */

let INPUT_CNT = 1000000;
let num = 0;
let count = 0;

// return 앞뒤가 똑같다 ? true : false
const isThisTenet = (inputNum) => {
    const halfLength = Math.floor(inputNum.length/2);
    const leftside = inputNum.substr(0, halfLength);
    const startPointOfRightside = inputNum.length%2 === 0 ? halfLength : halfLength + 1; // 자리수가 짝수인 것과 홀수인 것을 구분해줘야함
    const rightside = inputNum.substr(startPointOfRightside, halfLength).split('').reverse().join('');
    return leftside === rightside;
};

console.time();
while(true) {
    String(num).length === 1 || isThisTenet(String(num)) ? count += 1 : {} ; // 1자리 숫자거나 앞뒤가 똑같은 숫자면 count ++
    if (count >= INPUT_CNT) break; // gameover
    num ++; // 계속 진행해야하면 숫자 하나 더해주기
}
console.timeEnd();
console.log(`${INPUT_CNT}번째 숫자는 ${num}이다`);