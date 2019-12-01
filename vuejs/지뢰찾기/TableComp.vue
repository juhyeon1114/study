<template>
    <table>
        <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
            <td 
                v-for="(cellData, cellIndex) in rowData" 
                :key="cellIndex" 
                :style="cellDataStyle(rowIndex, cellIndex)" 
                @click="onClickTd(rowIndex, cellIndex)" 
                @contextmenu.prevent="onRightClickTd(rowIndex, cellIndex)"
            >
                {{cellDataText(rowIndex, cellIndex)}}
            </td>
        </tr>
    </table>
</template>

<script>
import {mapState} from 'vuex';
import {CODE, OPEN_CELL, QUESTION_CELL, NORMALIZE_CELL, FLAG_CELL, CLICK_MINE} from './store';

export default {
    computed : {
        ...mapState(['tableData', 'halted']),
        cellDataStyle (state) {
            //computed 에서 매개변수를 받기 위해선 내부에서 화살표 함수로 받기
            // 껍데기 함수는 일반 형태의 함수
            return (row, cell) => {
                switch (this.$store.state.tableData[row][cell]) {
                    case CODE.NORMAL :
                    case CODE.MINE :
                        return {
                            background : "#444"
                        };
                    case CODE.CLICKED_MINE :
                    case CODE.OPENED :
                        return {
                            background : "white"
                        };
                    case CODE.FLAG :
                    case CODE.FLAG_MINE :
                        return {
                            background : "red"
                        };
                    case CODE.QUESTION :
                    case CODE.QUESTION_MINE :
                        return {
                            background : "yellow"
                        };
                    default : return {};
                }
            }
        },
        cellDataText(row, cell){
            return (row,cell) => {
                switch (this.$store.state.tableData[row][cell]) {
                    case CODE.MINE :
                        return 'X';
                    case CODE.NORMAL :
                        return '';
                    case CODE.FLAG_MINE :
                    case CODE.FLAG :
                        return '!';
                    case CODE.QUESTION_MINE :
                    case CODE.QUESTION :
                        return '?';
                    case CODE.CLICKED_MINE :
                        return '펑';
                    case 0 :
                        return '';
                    default : 
                        return this.$store.state.tableData[row][cell];
                }
            }
        }
    },
    methods :{
        onClickTd(row, cell){
            if(this.halted){
                return;
            }
            switch (this.$store.state.tableData[row][cell]) {
                case CODE.NORMAL :
                    return this.$store.commit(OPEN_CELL, {row,cell});
                case CODE.MINE :
                    return this.$store.commit(CLICK_MINE, {row,cell});
                default : break;
            }
            this.$store.commit(OPEN_CELL, {row, cell});
        },
        onRightClickTd(row,cell){
            if(this.halted){
                return;
            }
            switch (this.$store.state.tableData[row][cell]) {
                case CODE.NORMAL :
                case CODE.MINE :
                    return this.$store.commit(FLAG_CELL, {row, cell}) ;
                    
                case CODE.FLAG_MINE :
                case CODE.FLAG :
                    return this.$store.commit(QUESTION_CELL, {row, cell}) ;
                    
                case CODE.QUESTION_MINE :
                case CODE.QUESTION :
                    return this.$store.commit(NORMALIZE_CELL, {row, cell}) ;
                    
                default : break;
            }
        }
    }
}
</script>