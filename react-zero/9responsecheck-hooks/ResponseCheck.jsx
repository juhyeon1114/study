import React, {memo} from 'react';
const {useState, useRef}  = React;

const ResponseCheck = memo(() => {
    const [status, setStatus] = useState('waiting');
    const [msg, setMsg] = useState('클릭해서 시작하세요');
    const [result, setResult] = useState([]);
    const [timeoutEvent, setTimeoutEvent] = useState(null);
    const [start, setStart] = useState(null);

    const onClickScreen = () => {
        if (status === 'waiting') {
            const randomTime = Math.floor(Math.random() * 500 + 3000);
            setStatus('ready');
            setMsg('준비');
            const timeout = setTimeout(() => {
                setStatus('now');
                setMsg('땅');
                setStart(new Date());
            }, randomTime);
            setTimeoutEvent(timeout);
        } else if (status === 'ready') {
            clearTimeout(timeoutEvent);
            setStatus('waiting');
            setMsg('너무 성급함');
        } else if (status === 'now') {
            const end = new Date();
            setStatus('waiting');
            setMsg('굳');
            setResult(prevResult => [...prevResult, end - start]);
        }
    }

    return (
        <>
            <div id="screen" className={status} onClick={onClickScreen}>
                {msg}
            </div>
            <div>
                {
                    result.length !== 0 
                        ? <div >평균 시간: {result.reduce((a,c)=> a + c ) / result.length * 0.001}s</div>
                        : null
                }
            </div>
            <ul>
                {
                    result.map((c, idx)=>{
                        return <li key={idx}>{c}</li>
                    })
                }
            </ul>
        </>
    );
});

export default ResponseCheck;