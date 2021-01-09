var greeting = require('@juhyeon/hi');
console.log(greeting);


/**
 * npm outdated
 *  -> 설치한 패키지들의 버전 정보를 보여줌
 * 버전 관리
 *  ^1.0.0 : npm update 또는 install하는 경우 가장 최근 버전을 설치
 *  ~1.0.0 : 처음, 중간 넘버는 유지하고 가장 뒤에 숫자만 최근 버전으로 설치
 *  1.0.0  :정확히 해당 버전의 패키지를 설치
 * npm update
 *  -> package.json에 기반해서 패키지들 update(package.json에 패키지들을 업데이트할 버전으로 수정해야함
 * npm uninstall @juhyeon/hi, npm uninstall -g @juhyeon/hi
 *  -> package 삭제 하는 법
 */

/**
 * 패키지 사용하는 법
 *  1. 로컬 패키지로 설치
 *  -> npm i @juhyeon/hi
 *  2. 전역 패키지로 설치
 *  -> npm i -g @juhyeon/hi
 *  3. 일회용 패키지로 설치
 *  -> npx @juhyeon/hi ko
 *  -> npx -p @juhyeon/hi say-hi ko : @juhyeon/hi 패키지를 다운 받고 say-hi ko 라는 명령어를 실행
 *  -> npx say-hi ko : 로컬에 파일이 있다면 실행, 없다면 글로벌에 파일이 있는지 확인하고 실행, 없다면 다운받아서 실행하고 삭제
 */
