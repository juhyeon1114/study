/**
 * 1) 술취한 바퀴벌레 lv3
 * https://codingdojang.com/scode/425?answer_mode=hide 
 */
const ROW = 10;
const COL = 10;
let currentCol = 0;
let currentRow = 0;
const DIRECTION = [
    'north west', 'north', 'north east',
    'west',                     'east',
    'south west', 'south', 'south east',  
];

let arr = Array(ROW).fill(0).map(v => Array(COL).fill(0)); // 돌아다닐 array

const randomWalk = () => { // 랜덤으로 다음 방향을 정한 후, 움직여도 되는 방향이면 움직일 방향을 return
    const randomNum = Math.floor(Math.random()*8); // 0 ~ 7 중에 랜덤 픽
    const randomDir = DIRECTION[randomNum];
    let nextCol = null;
    let nextRow = null;
    if (randomDir.indexOf('north') !== -1 || randomDir.indexOf('south') !== -1) { // 북 || 남
        if (randomDir.indexOf('north') !== -1) nextRow = currentRow - 1; // 북
        if (randomDir.indexOf('south') !== -1) nextRow = currentRow + 1; // 남
    } else { // 북, 남이 모두 없음
        nextRow = currentRow;
    }

    if (randomDir.indexOf('east') !== -1 || randomDir.indexOf('west') !== -1) { // 동 || 서
        if (randomDir.indexOf('east') !== -1) nextCol = currentCol + 1; // 동
        if (randomDir.indexOf('west') !== -1) nextCol = currentCol - 1; // 서
    } else { // 동, 서가 모두 없음
        nextCol = currentCol;
    }

    // return 다음칸이 움직여도 되는 칸 ? 움직일 칸 : 움직이지마
    return (nextCol >= 0 && nextCol < COL && nextRow >= 0 && nextRow < ROW) ? { canIMove: true, nextCol, nextRow } : { canIMove : false }
}

const gameOver = () => { // array에 0이 있다 ? false : true;
    let finish = true;
    for (let i=0; i<ROW; i++) {
        for (let j=0; j<COL; j++) {
            if (arr[i][j] === 0) {
                finish = false;
                break;
            }
        }
        if (!finish) break;
    }
    return finish;
}

while(true) {
    arr[currentRow][currentCol] += 1; // 현재위치에 += 1

    const check = randomWalk();
    if (check.canIMove) { // 랜덤으로 선택한 다음칸이 움직여도 되는 곳인 경우
        currentRow = check.nextRow;
        currentCol = check.nextCol;

        if (gameOver()) { // 다음칸으로 이동하기 전, 게임이 끝났는지 판단
            console.log('각 칸에 바퀴벌레가 멈추었던 횟수 : ', arr);
            let total = 0;
            arr.forEach(row => {
                row.forEach(col => {
                    total += col;
                });
            });
            console.log('바퀴벌레가 움직인 횟수 : ', total - 1); // 처음위치에 1이 찍히는 것은 제외
            break;
        }
    }
}