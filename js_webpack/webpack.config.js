const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {    
    mode: "development", //none, development, production(default)
    entry: {
        index: "./source/index.js",
        about: "./source/about.js"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        // filename: 'index_bundle.js'
        filename: '[name]_bundle.js'
        //__dirname : webpack.config.js파일의 경로를 알려주는 약속된 것. 
        // public : 최종 출력물의 결과가 뿌려지는 경로. (__dirname 기준으로)
    },
    module: {
        rules: [
            {
                // webapck이 확장자가 css인 파일을 만나면 알라서  load해줌
                test: /\.css$/,
                use: [
                    // 아래에 있는 로더가 먼저 동작됨
                    'style-loader', // 웹팩으로 가져온 css파일을 웹페이지에 주입해주는 로더
                    'css-loader', // css 파일을 읽어와서 웹팩으로 가져오는 로더
                ]
            }
        ]
    },
    plugins: [
        //html파일들을 템플릿처럼 취급해서 최종적이 결과물의 새로운 html파일을 만드는 플러그인
        new HtmlWebpackPlugin({
            template: './source/index.html', 
            filename: './index.html',
            // index.html파일을 템플릿으로해서 index.html파일로 만든다는 의미
            chunks: ['index'],
        }), 
        new HtmlWebpackPlugin({
            template: './source/about.html', 
            filename: './about.html',
            // about.html파일을 템플릿으로해서 about.html파일로 만든다는 의미
            chunks: ['about'],
        }), 
    ],
}

//npx webpack --config webpack.config.js
// -> --config webpack.config.js 는 파일명을 webpack.config.js라고 했다면 생략 가능
// alt + shift + f 

//npx webpack --watch

/**
 * [추가 기능]
 * DevServer : live reload hot module replacement
 * Code splitting 
 * Lazy loading
 */