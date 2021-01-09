const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root');

const { default: MineFinder } = require('./MineFinder');

const Hot = hot(MineFinder);

ReactDom.render(<Hot />, document.querySelector('#root'));

 