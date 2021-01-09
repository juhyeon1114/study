var greeting = require('./main');
console.log('Greeting : ' + greeting[process.argv[2]]);



/**
 * node cli.js ko
 * process.argv = 사용자가 입력한 내용(배열)
 * process.argv[0] = 노드 설치 경로
 * process.argv[1] = 파일 위치 경로
 * process.argv[2] = ko
 */

/**
 * #!/usr/bin/env node 
 */