import React, {memo, useState, useRef, useEffect, useMemo, useCallback} from 'react';
import Ball from './Ball';

const getWinNumbers = () => {
    let result = [];
    while(result.length < 7){
        const randomNumber = Math.ceil(Math.random()*45);
        if (result.indexOf(randomNumber) !== -1) {
            continue;
        }
        result.push(randomNumber);
    }
    return result;
}

const Lotto = memo(() => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    /**
     * useMemo
     * 첫번째 인자에서 return 받은 값을 계속 기억하고 있는다 (함수의 return 값을 기억)
     * 두번째 인자에 있는 값의 변동이 없으면 다시 실행되지 않는다
     * -> 즉, 렌더딩될 때마다 다시 실행되지 않아서 메모리 절약이 가능하다.
     */
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [redo, setRedo] = useState(false);

    const timeouts = useRef([]);
    const finish = useRef(false);

    useEffect(()=>{
        pickBalls();

        return () => {
            timeouts.current.forEach(e => {
                clearTimeout(e);
            });
        }
    }, []);
    
    useEffect(()=>{
        if (winBalls.length >= winNumbers.length - 1) {
            finish.current = true;
        } else {
            finish.current = false;
        }
    }, [winBalls]);
    
    const oneMore = () => {
        setWinNumbers([]);
        setWinBalls([]);
        setRedo(false);
        timeouts.current = [];
        pickBalls();
    };

    const pickBalls = () => {
        setWinNumbers(getWinNumbers());
        for (let i=0; i<winNumbers.length; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls(prevWinBalls => [...prevWinBalls, winNumbers[i]]);
            }, 100 * i);
        }
    };

    return (
        <div>
            <div>당청숫자</div>
            <div id="result">
                { winBalls.map((v, idx) => idx !== winBalls.length-1 ? <Ball key={v} number={v}></Ball> : null ) }
            </div>
            {
                finish.current  && !redo ?
                <div>
                    <br /><button onClick={() => { setRedo(true) }}>하나 더</button>
                </div>
                : null
            }
            {
                redo ? 
                <>
                <div>보너스</div>
                <div>
                    {<Ball number={winBalls[winBalls.length - 1]}></Ball>}
                </div>
                <div>
                    <button onClick={() => oneMore()}>한 번 더</button>
                </div>
                </>
                : null
            }
            
        </div>
    );
});

export default Lotto;

/**
 * useRef : 특정 값을 기억
 * useMemo : 특정 함수의 return 값을 기억
 * useCallback : 특정 함수를 기억
 */