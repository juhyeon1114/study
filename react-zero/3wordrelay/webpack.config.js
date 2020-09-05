const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },

    /**
     * 입력
     */
    entry: {
        app: ['./client'],
    },

    /**
     * 빌드할 때, 적용할 모듈들
     */
    module: {
        rules: [{
            test: /\.jsx?/, // js, jsx파일에 규칙을 적용한다
            loader: 'babel-loader', // 그 규칙은 '바벨'의 룰을 적용한다.
            options: { // 바벨이 사용할 옵션들
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            }
        }]
    },

    /**
     * 출력
     */
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    }
};

/**
 * 바벨 패키지 메모
 * 1. @babel/core : 기본적인 바벨 최신 문법 변환
 * 2. @babel/preset-env : 나의 환경에 맞게 변환
 * 3. @babel/preset-react : react(jsx) 파일을 변환
 * 4. babel-loader : 바벨과 웹팩을 연결해주는 것
 */