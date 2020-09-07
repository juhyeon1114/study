import React, {memo} from 'react';
const {useState, useRef}  = React;

import Try from './Try';

function getNumbers(){
    const candidate = [1,2,3,4,5,6,7,8,9];
    const arr = [];
    for (let i=0; i < 4; i++) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        arr.push(chosen);
    }
    return arr;
}

const NumberBaseball = memo(() => {
    const [answer, setAnswer ] = useState(getNumbers());
    const [value, setValue ] = useState('');
    const [result, setResult ] = useState('');
    const [tries, setTries ] = useState([]);
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (!value || tries.length >= 10) {
            return false;
        }

        if (value === answer.join('')) {
            setResult('홈런');
            setValue('');
            setTries((prevTries)=>{
                return [...prevTries, {try: value, result: '홈런'}]
            });
            resetGame('홈런');
        } else {
            const answerArray = value.split('').map(v => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult('실패');
                resetGame(`실패. 게임 다시 시작 ${answer.join('')}`);
            } else {
                for (let i=0; i<4; i++) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setValue('');
                setTries((prevTries)=>{
                    return [...prevTries, {try: value, result: `${strike} 스트라이크, ${ball} 볼`}]
                });
            }
        }

        setValue('');
        inputRef.current.focus();
    };
    const resetGame = (word) => {
        alert(word);
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
    };
    const onChangeInput = (e) => { 
        setValue(e.target.value);
    };

    return (
        <>
            <div>
                <form onSubmit={onSubmitForm}>
                    <input ref={inputRef} maxLength={4} type="text" value={value} onChange={onChangeInput}/>
                    <button type="submit">입력</button>
                </form>
                <div>시도 : {tries.length}</div>
                <div>
                    <Try tries={tries}></Try>
                </div>
            </div>
        </>
    );
    
});

export default NumberBaseball;