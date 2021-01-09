import React, {memo} from 'react';
const {useState, useRef}  = React;

const ResponseCheck = memo(() => {
    /**
     * state VS ref
     * -> state로 정의한 변수의 값이 바뀌면 다시 렌더링 된다.
     * -> ref로 정의한 변수의 값이 바뀌어도 다시 렌더링 되지 않는다.
     */
    const [status, setStatus] = useState('waiting');
    const [msg, setMsg] = useState('클릭해서 시작하세요');
    const [result, setResult] = useState([]);
    const timeoutEvent = useRef(null);
    const start = useRef(null);

    const onClickScreen = () => {
        if (status === 'waiting') {
            const randomTime = Math.floor(Math.random() * 500 + 3000);
            setStatus('ready');
            setMsg('준비');
            timeoutEvent.current = setTimeout(() => {
                setStatus('now');
                setMsg('땅');
                start.current = new Date();
            }, randomTime);
        } else if (status === 'ready') {
            clearTimeout(timeoutEvent.current);
            setStatus('waiting');
            setMsg('너무 성급함');
        } else if (status === 'now') {
            const end = new Date();
            setStatus('waiting');
            setMsg('굳');
            setResult(prevResult => [...prevResult, end - start.current]);
        }
    }

    return (
        <div>
            <div id="screen" className={status} onClick={onClickScreen}>
                {msg}
            </div>
            <div>
                {result.length !== 0 
                    ? <div >평균 시간: {result.reduce((a,c) => a + c ) / result.length * 0.001}s</div>
                    : null}
            </div>
            <ul>
                {result.map((c, idx) => <li key={idx}>{c}</li>)}
            </ul>
        </div>
    );
});

export default ResponseCheck;