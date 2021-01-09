import React, {memo, useCallback, useEffect, useRef} from 'react';
import {CLICK_CELL, CHANGE_TURN} from './TTT';

const TD = memo(({rowIdx, colIdx, col, dispatch}) => {
    /**
     * 성능 최적화 디버깅 방법
     */
    console.log('td rendered')
    const ref = useRef([]);
    useEffect(() => {
        console.log(ref.current[0] === rowIdx, ref.current[1] === colIdx, ref.current[2] === col, ref.current[3] === dispatch )
        ref.current = [rowIdx, colIdx, col, dispatch];
    }, [rowIdx, colIdx, col, dispatch]);

    const onClickTd = useCallback(()=>{
        if (col) {
            return;
        }
        dispatch({ type: CLICK_CELL, rowIdx, colIdx });
        dispatch({ type: CHANGE_TURN });
    }, [col]);

    return (
        <>
            <td key={colIdx} onClick={onClickTd}>{col}</td>
        </>
    );
});

export default TD;