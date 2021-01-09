import React, {memo, useState, useRef, useEffect} from 'react';


const RSP = memo(()=>{
    const [rsp, setRsp] = useState('가위');
    const [inputRsp, setInputRsp] = useState(null);
    const [result, setResult] = useState(null);
    const [arr, setArr] = useState(['가위', '바위', '보', '가위']);

    const rspInterval = useRef(null);
    const rspTimeout = useRef(null);

    const onClickBtn = (inputRsp) => {
        clearTimeout(rspInterval.current);
        clearTimeout(rspTimeout.current);
        setInputRsp(inputRsp);

        if (inputRsp === rsp) {
            setResult('draw');
        } else {
            const winningIdx = arr.indexOf(inputRsp) + 1;
            const winningRsp = arr[winningIdx];
            if (rsp ===  winningRsp) {
                setResult('loose');
            } else {
                setResult('win');
            }
        }

        rspTimeout.current= setTimeout(()=>{
            changeRsp();
        }, 2000);
    };

    const changeRsp = () => {
        if (rsp === '가위') {
            setRsp('바위');
        } else if (rsp === '바위') {
            setRsp('보');
        } else if (rsp === '보') {
            setRsp('가위');
        }
    };

    useEffect(()=>{ // componentDidMount, componentDidUpdate의 역할 (정확히 같은 것은 아님)
        rspInterval.current = setTimeout(() => {
            changeRsp();
        }, 100);

        return () => { // compoenentWillUnmount 역할
            clearTimeout(rspInterval.current);
        }
    }, [rsp]); // 변경을 감지하고 싶은 state를 배열에 입력하면 됨 

    return (
        <>
            <div>{rsp}</div>
            <div>
                <button onClick={() => onClickBtn('가위')}>가위</button>
                <button onClick={() => onClickBtn('바위')}>바위</button>
                <button onClick={() => onClickBtn('보')}>보</button>
                <div>{inputRsp} {result}</div>
            </div>
        </>
    );
});

export default RSP;
