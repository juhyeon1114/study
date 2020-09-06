const React = require('react');
const {Component} = React;

import Try from './Try';

function getNumbers(){

}

class NumberBaseball extends Component {
    state = {
        answer: getNumbers(),
        value: '',
        result: '',
        tries: [],
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if (!this.state.value || this.state.tries.length >= 10) {
            return false;
        }
        this.state.tries.push(this.state.value);
        this.setState({
            value: '',
        })
        this.input.focus();
    };

    onChangeInput = (e) => { this.setState({value : e.target.value}); };
    onRefInput = (c) => { this.input = c; };
    input;

    render() {
        return (
            <>
                <div>
                    <form onSubmit={this.onSubmitForm}>
                        <input ref={this.onRefInput} maxLength={4} type="number" value={this.state.value} onChange={this.onChangeInput}/>
                        <button type="submit">입력</button>
                    </form>
                    <div>시도 : {this.state.tries.length}</div>
                    <div>
                        <Try tries={this.state.tries}></Try>
                    </div>
                </div>
            </>
        );
    }
}

export default NumberBaseball;