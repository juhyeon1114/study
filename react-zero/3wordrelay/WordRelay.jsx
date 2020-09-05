const React = require('react');
const {Component} = React;

class WordRelay extends Component {
    state = {
        text: 'hello'
    }
    render() {
        return <div>{this.state.text}</div>
    }
}

export default WordRelay;