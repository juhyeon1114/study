import React, {PureComponent} from 'react';
import Ball from './Ball';

function getwinNumbers() {
    console.log('getWinNumbers');
    const result = [];
    while(result.length < 7){
        const randomNumber = Math.ceil(Math.random()*45);
        if (result.indexOf(randomNumber) !== -1) {
            continue;
        }
        result.push(randomNumber);
    }
    return result;
}

class Lotto extends PureComponent {
    state = {
        winNumbers: getwinNumbers(),
        winBalls: [],
        redo: false,
    }

    timeouts = [];
    finish = false;
    
    componentDidMount() {
        for (let i=0; i<this.state.winNumbers.length; i++) {
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        winBalls: [...prevState.winBalls, this.state.winNumbers[i]],
                    }
                });
            }, 500 * i);
        }
    }

    componentWillUnmount() {
        this.timeouts.forEach(e => {
            clearTimeout(e);
        });
    }

    componentDidUpdate(){
        if (this.state.winBalls.length >= this.state.winNumbers.length - 1) {
            this.finish = true;
        }
    }

    render(){
        return (
            <div>
                <div>당청숫자</div>
                <div id="result">
                    { this.state.winBalls.map((v, idx) => idx !== this.state.winBalls.length-1 ? <Ball key={v} number={v}></Ball> : null ) }
                </div>
                {
                    this.finish  && !this.state.redo ?
                    <div>
                        <br /><button onClick={() => { this.setState({redo:true}) }}>한번 더</button>
                    </div>
                    : null
                }
                {
                    this.state.redo ? 
                    <>
                    <div>보너스</div>
                    <div>
                        {<Ball number={this.state.winBalls[this.state.winBalls.length - 1]}></Ball>}
                    </div>
                    </>
                    : null
                }
                
            </div>
        );
    };
};

export default Lotto;