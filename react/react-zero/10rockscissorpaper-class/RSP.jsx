import React, {PureComponent} from 'react';

class RSP extends PureComponent {
    state = {
        rsp : '가위',
        inputRsp : null,
        result: null,
        arr: ['가위', '바위', '보', '가위'],
    }

    rspInterval = null;
    rspTimeout = null;

    onClickBtn = (inputRsp) => {
        clearInterval(this.rspInterval);
        clearTimeout(this.rspTimeout);
        this.setState({ inputRsp : inputRsp });

        if (inputRsp === this.state.rsp) {
            this.setState({result: 'draw'});
        } else {
            const winningIdx = this.state.arr.indexOf(inputRsp) + 1;
            const winningRsp = this.state.arr[winningIdx];
            if (this.state.rsp ===  winningRsp) {
                this.setState({result: 'loose'});
            } else {
                this.setState({result: 'win'});
            }
        } 

        this.rspTimeout = setTimeout(()=>{
            this.rspInterval = setInterval(()=>{
                this.changeRsp()
            }, 100);
        }, 2000);
    };

    changeRsp = () => {
        if (this.state.rsp === '가위') {
            this.setState({ rsp: '바위' });
        } else if (this.state.rsp === '바위') {
            this.setState({ rsp: '보' });
        } else if (this.state.rsp === '보') {
            this.setState({ rsp: '가위' });
        }
    };

    componentDidMount(){
        if (!this.rspInterval) {
            this.rspInterval = setInterval(()=>{
                this.changeRsp();
            }, 100);
        }        
    };

    componentWillUnmount(){
        clearInterval(this.rspInterval);
        clearTimeout(this.rspTimeout);
    };

    render(){
        return (
            <>
                <div>{this.state.rsp}</div>
                <div>
                    <button onClick={() => this.onClickBtn('가위')}>가위</button>
                    <button onClick={() => this.onClickBtn('바위')}>바위</button>
                    <button onClick={() => this.onClickBtn('보')}>보</button>
                    <div>{this.state.inputRsp} {this.state.result}</div>
                </div>
            </>
        );
    };
};

export default RSP;

/**************************************
 * React Life Cycle
 **************************************
 *
 * << Mounting >>
 * 1. contructor()
 * 2. render()
 * 3. (React updates Dom and refs)
 * 4. componentDidMount() -> 비동기 요청은 주로 이 때 많이 함
 * 
 * << Updating >>
 * 1. render()
 * 2. (React updates Dom and refs)
 * 3. componentDidUpdate()
 * 
 * << Unmounting >>
 * 1. componentWillUnmount() -> 비동기 요청은 주로 이 때 많이 함
 * 
 **************************************/