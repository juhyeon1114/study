var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var url = require('url'); //url 이라는 node의 모듈을 사용.
var portNum = 3000;
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html'); //XSS 이슈를 막기위한 모듈, <script></script> 태그를 포함한 내부의 내용을 모두 삭제함(default)

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    var title = queryData.id;
    var control = `
        <a href="/create">create</a>
        <a href="/update?id=${title}">update</a>
        <form action="delete_process" method="post">
            <input type="hidden" name="id" value="${title}">
            <input type="submit" value="delete">
        </form>
    `;

    var filteredId;
    if(title === undefined){
        filteredId = undefined;
    } else {
        filteredId = path.parse(title).base;
    }

    if(pathname == '/' || pathname == '/create' || pathname == '/update'){
        fs.readFile(`data/${filteredId}`,'utf8',function(err,description){
            if(title === undefined){ // home인 경우 title과 description이 undefined 인 것을 처리하는 부분
                title = 'Welcome';
                description = 'Hello, node.js';
                control = `<a href="/create">create</a>`;
            } else {
                title = sanitizeHtml(title);
                description = sanitizeHtml(description);
            }
            if (pathname == '/create'){
                title = 'WEB - create';
                description = `
                    <form action="/create_process" method="post">
                        <p><input type="text" name="title" placeholder="title"></p>
                        <p>
                            <textarea name="description" placeholder="description"></textarea>
                        </p>
                        <p>
                            <input type="submit">
                        </p>
                    </form>
                `;
            } else if(pathname == '/update'){
                description = `
                    <form action="/update_process" method="post">
                        <p><input type="hidden" name="id" placeholder="title" value="${title}"></p>
                        <p><input type="text" name="title" placeholder="title" value="${title}"></p>
                        <p>
                            <textarea name="description" placeholder="description">${description}</textarea>
                        </p>
                        <p>
                            <input type="submit">
                        </p>
                    </form>
                `;
            }
            
            
            fs.readdir('./data', function(err, filelist){
                /* 함수
                var list = templateList(filelist);
                var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`,control);
                response.writeHead(200); response.end(template);
                */
                /* 객체 */
                var list = template.list(filelist);
                var html = template.html(title, list, `<h2>${title}</h2><p>${description}</p>`,control);
                response.writeHead(200); response.end(html);

            });
        });
    } else if(pathname == '/create_process') {
        var body = '';
        request.on('data',function(data){
            body += data;
            // 아래 : 입력된 데이터의 양이 너무 많으면 접속을 강제로 끊음
            /*if (body.length > 1e6){
                request.connection.destroy();
            }*/
        });
        request.on('end',function(){
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`,description,'utf8', function(err){
                response.writeHead(302, {Location: `/?id=${title}`});
                response.end();
            });
        });
        
    } else if(pathname == '/update_process') {
        var body = '';
        request.on('data',function(data){
            body += data;
        });
        request.on('end',function(){
            var post = qs.parse(body);
            var id = post.id;
            var title = post.title;
            var description = post.description;
            fs.rename(`data/${id}`, `data/${title}`, function(err){
                fs.writeFile(`data/${title}`,description,'utf8', function(err){
                    response.writeHead(302, {Location: `/?id=${title}`}); response.end();
                });
            });
        });
        
    } else if(pathname == '/delete_process') {
        var body = '';
        request.on('data',function(data){
            body += data;
        });
        request.on('end',function(){
            var post = qs.parse(body);
            var id = post.id;
            var filteredId = path.parse(id).base;
            fs.unlink(`data/${filteredId}`, function(err){
                response.writeHead(302, {Location: `/`}); response.end();
            });
        });
        
    } else {
        response.writeHead(404);
        response.end('not found'); 
    } 
});
app.listen(portNum);

/*
[url]
http://oepnturorials.org:3000/main?id=HTML&page=12
-> http = 'protocol'
    -> 통신 규칙. 사용자가 서버에 접속할 때 어떤 규칙으로 접속할 것인지
-> oepnturorials.org = 'host || domain name'
-> 3000 = 'port number'
    -> 한 대의 컴퓨터 안에 여러 서버가 있을 수 있고, 3000번 포트의 서버와 통신한다는 것을 의미
-> main = 'path'
    -> 해당 서버의 폴더 또는 파일 경로
-> id=HTML&page=12 = 'query string'
    -> 웹서버에게 데이터를 전달할 수 있다.
*/

/*
pm2 start app.js
pm2 start app.js --watch
pm2 log
pm2 del [이름]
pm2 monit -> pm2로 실행되고 있는 프로그램들을 모니터링할 수 있음
pm2 list -> 프로그램들 list 보여줌
pm2 stop [이름]
pm2 -h
pm2 kill -> 모든 pm2 프로세스 종료
pm2 start app.js --watch --no-daemon -> 백그라운드에서 돌아가는 프로그램을 daemon이라고 함. 즉, daemon이 아닌 상태로 실행하는 것을 의미(pm2 실행 + log보기)
pm2 start app.js --watch --ignore-watch="data/* sessions/*" --no-daemon -> data 디렉토리와 sessions 디렉토리에 있는 모든 파일에 대해 crud가 발생해도 프로세스를 재시작하지 않음
*/