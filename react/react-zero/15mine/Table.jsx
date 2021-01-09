import React, {memo, useContext} from 'react';
import { TableContext } from './MineFinder';
const { default: TR } = require("./TR");

const Table = memo(() => {
    const { tableData } = useContext(TableContext);

    return (
        <>
            <table>
                <tbody>
                    {Array(tableData.length).fill().map((tr, i)=> <TR></TR>)}
                    {/* <TR></TR> */}
                </tbody>
            </table>
        </>
    );
});

export default Table;