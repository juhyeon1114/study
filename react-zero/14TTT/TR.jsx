import React, {memo} from 'react';
const { default: TD } = require("./TD");

const TR = memo(({row, rowIdx, dispatch}) => {
    return (
        <>
            <tr>
                {row.map((col,idx) => <TD dispatch={dispatch} key={idx} col={col} rowIdx={rowIdx} colIdx={idx} />)}
            </tr>
        </>
    );
});

export default TR;