import React, {memo, useContext} from 'react';
import { TableContext } from './MineFinder';
const { default: TD } = require("./TD");

const TR = memo(() => {
    const { tableData } = useContext(TableContext);

    return (
        <>
            <tr>
                {tableData[0] && Array(tableData[0].length).fill().map((td, i) => 
                    <TD></TD>
                )}
            </tr>
        </>
    );
});

export default TR;