import React, {memo} from 'react';
const { default: TR } = require("./TR");

const Table = memo(({data, dispatch}) => {
    return (
        <>
            <table>
                <tbody>
                    {data.map((row,idx) => <TR dispatch={dispatch} key={idx} row={row} rowIdx={idx}></TR>)}
                </tbody>
            </table>
        </>
    );
});

export default Table;