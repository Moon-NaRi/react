const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay'); //코드 관리를 위하여 분리

ReactDom.render(<WordRelay />, document.querySelector('#root'));