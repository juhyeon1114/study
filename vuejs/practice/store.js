import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const START_GAME = "START_GAME";
export const CLICK_COL = "CLICK_COL";
export const code = {
    normal : 1,
    mine : 2,
};

const planteMine = (row, cell, mine) => {
    const candidate = Array(row * cell).fill().map((arr, i) => {
        return i;
    });
    const shuffle = [];
    while(candidate.length > row * cell - mine){
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }
    const data = [];
    for(let i=0; i<row; i++){
        const rowData = [];
        data.push(rowData);
        for (let j=0; j<cell; j++){
            rowData.push(code.normal);
        }
    }
    for(let k=0; k<shuffle.length; k++){
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = code.mine;
    }
    return data;
}

export default new Vuex.Store({
    state : {
        row : 0,
        col : 0,
        mine : 0,
        timer : 0,
        tableData : [],
    },
    getters : {

    },
    mutations : {
        [START_GAME](state, {row,col,mine}){
            state.tableData = planteMine(row,col,mine);
            let interval = setInterval(()=>{
                state.timer ++;
            },1000);
        },
        [CLICK_COL](state, {rowIdx, colIdx}){
            if(state.tableData[rowIdx][colIdx] === 1){
                console.log(1);
            } else {
                console.log("지뢰");
            }
        }
    },
    actions : {
        
    }
})