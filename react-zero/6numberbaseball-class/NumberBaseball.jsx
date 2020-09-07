import React, {PureComponent, createRef} from 'react';

import Try from './Try';

/**
 * 함수를 바깥에 뺀 이유
 * -> this를 쓰지 않기 때문에 그냥 뺐다
 */
function getNumbers(){
    const candidate = [1,2,3,4,5,6,7,8,9];
    const arr = [];
    for (let i=0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        arr.push(chosen);
    }
    return arr;
}

class NumberBaseball extends PureComponent {
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

        if (this.state.value === this.state.answer.join('')) {
            this.setState({
                result: '홈런',
                value: '',
                tries: [...this.state.tries, {try: this.state.value, result: '홈런'}]
                // react 에서는 push를 사용할 수 없어서 위와 같은 방식을 사용함
            })
            this.resetGame('홈런');
        } else {
            const answerArray = this.state.value.split('').map(v => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `실패`
                });
                this.resetGame(`실패. 게임 다시 시작 ${this.state.answer.join('')}`);
            } else {
                for (let i=0; i<4; i++) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, {try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼`}],
                    value: '',
                });
            }
        }

        this.setState({
            value: '',
        })
        this.input.current.focus();
    };
    resetGame = (word) => {
        alert(word);
        this.setState({
            value: '',
            answer: getNumbers(),
            tries: [],
        })
    };
    onChangeInput = (e) => { this.setState({value : e.target.value}); };
    // onRefInput = (c) => { this.input = c; };
    input = createRef();

    render() {
        return (
            <>
                <div>
                    <form onSubmit={this.onSubmitForm}>
                        <input ref={this.input} maxLength={4} type="number" value={this.state.value} onChange={this.onChangeInput}/>
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