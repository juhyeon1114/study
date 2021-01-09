const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const { default: Lotto } = require('./Lotto');

const Hot = hot(Lotto);

ReactDom.render(<Hot />, document.querySelector('#root'));

 