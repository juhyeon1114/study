var http = require('http');
var fs = require('fs');
var url = require('url'); //url 이라는 node의 모듈을 사용.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/'){
        title = 'welcome';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    fs.readFile(`data/${title}`,'utf8',function(err,description){
        var template = `
        <!doctype html>
        <html>
        <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
        </head>
        <body>
        <h1><a href="/">WEB</a></h1>
        <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ol>
        <h2>${title}</h2>
        <p>
            ${description}
        </p>
        </body>
        </html>
    `;
    response.end(template);
    });
});
app.listen(3000);


/*

*url
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