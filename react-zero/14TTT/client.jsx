const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const { default: TTT } = require('./TTT');

const Hot = hot(TTT);

ReactDom.render(<Hot />, document.querySelector('#root'));

 