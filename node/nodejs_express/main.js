const fs = require('fs');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const app = express(); //express 객체를 호출
const port = 3000;

app.use(helmet()); // helmet = 보안 미들웨어. 다양한 설정들로 보안 설정을 커스텀할 수 있음

const topicRouter = require('./routes/topic');
const indexRouter = require('./routes/index');

app.use(express.static('public')); //public directory에서 static을 찾겠다라는 의미
app.use(bodyParser.urlencoded({extended: false}));
//-> main.js가 실행될때마다 use()괄호 안의 bodyparser가 만드는 미들웨어가 실행됨.
//-> post방식의 전달 값을 읽는 코드
app.use( compression() );
app.get('*',function(req, res, next){ // 겥방식의 요청에만 동작함. 즉, 포스트 방식의 process코드에서는 동작안함
  fs.readdir('./data', function(error, filelist){
    req.list = filelist;
    next(); // 다음으로 호출되어야할 미들웨어
  });
});
//-> 미들웨어 만들기
//-> 미들웨어의 동작 : request, response객체를 받아서 그것들을 원하는대로 변형시킴.
//                    next를 호출함으로써 다음 미들웨어의 실행 여부를 결정함.

/* 라우팅 */
app.use('/', indexRouter);
app.use('/topic', topicRouter);
//-> topic슬러그를 갖는 것들에게 topicRouter미들웨어를 적용하겠다.

app.use((err, req, res, next)=>{
  console.log(err.stack);
  res.status(500).send("문제 발생");
}); // 에러 핸들러(*express에서 약속된 에러 핸들러)

app.use((req,res,next)=>{
  res.status(400).send('존재하지 않는 페이지입니다.');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/*
pm2 start app.js
pm2 start app.js --watch
pm2 log
pm2 del [이름]
pm2 monit -> pm2로 실행되고 있는 프로그램들을 모니터링할 수 있음
pm2 list -> 프로그램들 list 보여줌
pm2 stop [이름]
pm2 -h
*/

/*
[middleware]
-> 미들웨어란?
  - 로직 파트와 피지컬 파트를 연결하여 데이터를 주고 받을 수 있도록
  중간에서 매개 역할을 하는 것이다.

-> 미들웨어의 종류
  - Application-level middleware
    어플리케이션(또는 어플리케이션 객체)에 바인딩되어서 동작하는 미들웨어. 
  
  - Router-level middleware
  
  - Error-handling middleware
  
  - Built-in middleware
  
  - Third-party middleware
    다른 사람이 만든 미들웨어를 가져다 쓰는 것
*/