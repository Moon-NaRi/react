const path = require('path'); //경로 조작용으로 node에서 제공
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'word-relay-dev', //어떤 것을 위한 webpack 설정인가
  mode: 'development', //개발용이다 실서비스 : production
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'], //사용하는 확장자 입력
  },
  entry: { //입력
    app: './client', //['./client.jsx', '/WordRelay.jsx']
    //client에서 WordRelay를 불러오기 때문에 생략 가능
  },
  module: { //entry 파일에 적용할 모듈(라이브러리)
    rules: [{
      test: /\.jsx?$/, //규칙을 적용할 파일
      loader: 'babel-loader', //바벨 룰을 적용 (호환 굿)
      options: { //바벨 옵션
        presets: [ //플러그인 모음
          ['@babel/preset-env', { //많은 플러그인의 옵션을 설정
            targets: {browsers: ['> 5% in KR', 'last 2 chrome versions']}, //지원 브라우저, browserlist에서 확인
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: ['react-refresh/babel'],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [ //특정 기능 컴포넌트
    new ReactRefreshWebpackPlugin(),
  ],
  output: { //출력
    path: path.join(__dirname, 'dist'), //현재 폴더 안의 경로로 접근
    filename: 'app.js',
    publicPath: '/dist',
  },
  devServer: { //빌드 후 결과를 메모리로 저장해둠
    devMiddleware: { publicPath: '/dist' }, //빌드 파일의 위치(dev)
    static: { directory: path.resolve(__dirname) }, //실존하는 정적파일의 경로
    hot: true //기존 데이터를 유지하면서 다시 빌드
  }
};