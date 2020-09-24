import React, {memo, useState, useReducer, useCallback, useEffect} from 'react';
const { default: Table } = require("./Table");

const initialState = {
    winner : '',
    turn : 'o',
    table : [
        ['','',''],
        ['','',''], 
        ['','','']
    ],
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';

const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER:
            return {
                ...state, // 객체 얕은 복사
                winner: action.winner
            };
        case CLICK_CELL: 
            const r = action.rowIdx;
            const c = action.colIdx;
            const table = [...state.table];
            table[r] = [...table[r]];
            table[r][c] = state.turn;
            return {
                ...state,
                table
            }
        case CHANGE_TURN :
            return {
                ...state,
                turn : state.turn === 'o' ? 'x' : 'o',
            }
        default: break;
    }
}

const TTT = memo(() => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {table, turn, winner} = state;

    useEffect(() => {
        let finish = true;

        const who = turn === 'o'  ? 'x' : 'o';

        if (
            ((table[0][0] === who && table[0][1] === who && table[0][2]) === who ) ||
            ((table[1][0] === who && table[1][1] === who && table[1][2]) === who ) ||
            ((table[2][0] === who && table[2][1] === who && table[2][2]) === who ) ||
            ((table[0][0] === who && table[1][0] === who && table[2][0]) === who ) ||
            ((table[0][1] === who && table[1][1] === who && table[2][1]) === who ) ||
            ((table[2][2] === who && table[1][2] === who && table[2][2]) === who ) ||
            ((table[0][0] === who && table[1][1] === who && table[2][2]) === who ) ||
            ((table[2][0] === who && table[1][1] === who && table[0][2]) === who )
        ) {
            dispatch({ type: SET_WINNER, winner: who });
            return;
        }

        table.forEach(row => {
            row.forEach(col => {
                if (!col) {
                    finish = false;
                }
            });
        });

        if (finish) {
            alert('done');
        }
    }, [table]);

    return (
        <>
            <Table dispatch={dispatch} data={table}  />
            {winner && <h3>{winner}님의 승리</h3>}
        </>
    );
});

export default TTT;

/**
 * useReducer
 */