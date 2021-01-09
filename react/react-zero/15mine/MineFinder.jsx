import React, {memo, useReducer, createContext, useMemo} from 'react';
import Table from './Table';
import Form from './Form'

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2, 
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0, 
}

export const TableContext = createContext({
    tableData: [],
    dispatch: () => {}
});

const initialState = {
    tableData : [],
    timer: 0,
    result: '',
}

const plantMine = (row, col, mine) => {
    const candidate = Array(row*col).fill().map((arr,i) => {
        return i;
    });
    const shuffle = [];
    while(candidate.length > row*col-mine){
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }
    const data = [];
    for (let i=0; i<row; i++) {
        const rowData = [];
        data.push(rowData);
        for(let j=0; j<col; j++) {
            rowData.push(CODE.NORMAL);
        }
    }

    for (let k=0; k<shuffle.length; k++){
        const ver = Math.floor(shuffle[k] / col);
        const hor = shuffle[k] % col;
        data[ver][hor] = CODE.MINE;
    }
    
    return data;
}

const START_GAME = 'START_GAME';

const reducer = (state, action) => {
    switch (action.type) {
        case START_GAME :
            return {
                ...state,
                tableData: plantMine(action.row, action.col, action.mine)
            }
        default: break;
    }
}

const MineFinder = memo(() => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = useMemo(() => ({tableData: state.tableData, dispatch}), [state.tableData]); // 최적화를 위해서 외부에서 선언해주고 context value에 할당해준다

    return (
        // <TableContext.Provider value={{tableData : state.tableData, dispatch}}>
        <TableContext.Provider value={value}>
            <Form/>
            <div>
                {state.timer}
            </div>
            <Table/>
        </TableContext.Provider>
    );
});

export default MineFinder;