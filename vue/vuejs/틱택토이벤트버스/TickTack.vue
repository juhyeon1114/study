<template>
    <div>
        <div v-if="winner">{{winner}}의 승리</div>
        <table-comp :table-data="tableData"/>
        <div>{{turn}}의 턴</div>
    </div>
</template>
<script>
    import TableComp from './TableComp';
    import EventBus from './EventBus';

    export default {
        components : {
            TableComp,
        },
        data(){
            return {
                tableData : [
                    ['','',''],
                    ['','',''],
                    ['','',''],
                ],
                turn: 'o',
                winner: null,
            }
        },
        methods : {
            onClickTd(rowIndex,cellIndex){
            let win = false;
            if (this.tableData[rowIndex][cellIndex] === ""){
                this.$set(this.tableData[rowIndex], cellIndex, this.turn);
                if(this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn){
                    win = true;
                }
                if(this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn){
                    win = true;
                }
                if(this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn){
                    win = true;
                }
                if(this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn){
                    win = true;
                }

                if(win){
                    this.winner = this.turn;
                    this.turn = 'o';
                    this.tableData = [['','',''],['','',''],['','',''],];
                } else { // 무승부
                    let all = true;
                    this.tableData.forEach(row => {
                        row.forEach(cell => {
                            if(!cell){
                                all = false;
                            }
                        })
                    });
                    if(all){
                        this.winner = "무승부";
                        this.turn = 'o';
                        this.tableData = [['','',''],['','',''],['','',''],];
                    }
                    this.turn = this.turn === 'o' ? 'x' : 'o' ;
                }
            }  
        }
        },
        created(){
            EventBus.$on('clickTd',this.onClickTd); // 이벤트버스에 'clickTd'라는 이름으로 이벤트 등록
        }
    };
</script>

<style>
    table{
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 100px;
        height: 100px;
        text-align: center;
        font-size:50px;
        user-select: none;
    }

</style>