import React, {memo, useState, useCallback, useContext} from 'react';
import { TableContext } from './MineFinder';

const Form = memo(() => {
    const [row, setRow] = useState(10);
    const [col, setCol] = useState(10);
    const [mine, setMine] = useState(20);
    const { dispatch } = useContext(TableContext);


    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({ type: 'START_GAME', row, col, mine });
    }, [row, col, mine]);
    const onChangeRow = useCallback(e => setRow(e.target.value) );
    const onChangeCol = useCallback(e => setCol(e.target.value) );
    const onChangeMine = useCallback(e => setMine(e.target.value) );

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <input placeholder="가로" type="number" value={row} onChange={onChangeRow} />
                <input placeholder="세로" type="number" value={col} onChange={onChangeCol} />
                <input placeholder="지뢰" type="number" value={mine} onChange={onChangeMine} />
                <button type="submit">시작</button>
            </form>
        </div>
    );
});

export default Form;