import React, {PureComponent} from 'react';

class ResponseCheck extends PureComponent {
    state = {
        status: 'waiting',
        msg: '클릭해서 시작하세요',
        result: [],
        timeout: null,
        start: null,
    }

    onClickScreen = () => {
        const {status, msg, result} = this.state;
        if (status === 'waiting') {
            const randomTime = Math.floor(Math.random() * 500 + 3000);
            this.setState({
                status: 'ready',
                msg : '준비',
            })
            const timeout = setTimeout(() => {
                this.setState({
                    status: 'now',
                    msg: '땅',
                    start: new Date(),
                })
            }, randomTime);
            this.setState({
                timeout: timeout
            });
        } else if (status === 'ready') {
            clearTimeout(this.state.timeout);
            this.setState({
                status: 'waiting',
                msg : '너무 성급함'
            });
        } else if (status === 'now') {
            const end = new Date();
            this.setState((prevState)=>{
                return {
                    status: 'waiting',
                    msg: '굳',
                    result: [...prevState.result, end-this.state.start],
                    start: null,
                }
            });
        }
    }

    render(){
        return (
            <>
                <div id="screen" className={this.state.status} onClick={this.onClickScreen}>
                    {this.state.msg}
                </div>
                <div>
                    {
                        this.state.result.length !== 0 
                            ? <div >평균 시간: {this.state.result.reduce((a,c)=> a + c ) / this.state.result.length * 0.001}s</div>
                            : null
                    }
                </div>
                <ul>
                    {
                        this.state.result.map((c)=>{
                            return <li>{c}</li>
                        })
                    }
                </ul>
            </>
        );
    }    
};

export default ResponseCheck;