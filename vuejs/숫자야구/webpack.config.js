const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require("path"); 
// output 에 path는 절대경로를 적어주어야함
// node에서 간편하게 절대경로로 설정할 수 있게 도와줌. 그 결과가 아래 path

// 기본적으로 node환경에서는 require, vue환경에선 import

module.exports = { 
    mode : "development", // 개발 = development, 배포= production
    devtool : 'eval', // 개발 = eval 많이씀, 배포= hidden-source-map
    resolve:{
      extensions: ['.js','.vue'], //확장자 처리해줌. main.js에서 배열 속의 확장자 안써도 됨
    },
    entry: {
        app: path.join(__dirname, "main.js"),
    },
    module: {
        rules: [{
            test: /\.vue$/, // 파일명이 .vue로 끝나는 파일들을 의미
            loader: 'vue-loader',
        }],
    },
    plugins: [ // 최종 결과물이 나오기 전, 플러그인을 활용해서 최종 처리
        new VueLoaderPlugin(),
    ],
    output: { // 최종 결과물
        filename: "app.js",
        path: path.join(__dirname, "dist"), //현재경로 + dist폴더
    },
};
