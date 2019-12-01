<template>
    <td @click="onClickTurn">{{cellData}}</td>
</template>

<script>
export default {
    props:{
        cellData: String,
        rowIndex: Number,
        cellIndex: Number,
    },
    methods:{
        onClickTurn(){
            // this.$root.$data.tableData[this.rowIndex][this.cellIndex] = this.$root.$data.turn;
            // 위와 같은 형식은 데이터는 바뀌는데 view가 그려지지 않음
            // array에 인덱스를 이용해서 값을 바꾸면 view가 그려지지 않음
            // 그 해결법은 아래. $set
            let rootData = this.$root.$data;
            let win = false;
            if (rootData.tableData[this.rowIndex][this.cellIndex] === ""){
                this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
                if(rootData.tableData[this.rowIndex][0] === rootData.turn && rootData.tableData[this.rowIndex][1] === rootData.turn && rootData.tableData[this.rowIndex][2] === rootData.turn){
                    win = true;
                }
                if(rootData.tableData[0][this.cellIndex] === rootData.turn && rootData.tableData[1][this.cellIndex] === rootData.turn && rootData.tableData[2][this.cellIndex] === rootData.turn){
                    win = true;
                }
                if(rootData.tableData[0][0] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][2] === rootData.turn){
                    win = true;
                }
                if(rootData.tableData[0][2] === rootData.turn && rootData.tableData[1][1] === rootData.turn && rootData.tableData[2][0] === rootData.turn){
                    win = true;
                }

                if(win){
                    rootData.winner = rootData.turn;
                    rootData.turn = 'o';
                    rootData.tableData = [['','',''],['','',''],['','',''],];
                } else { // 무승부
                    let all = true;
                    rootData.tableData.forEach(row => {
                        row.forEach(cell => {
                            if(!cell){
                                all = false;
                            }
                        })
                    });
                    if(all){
                        rootData.winner = "무승부";
                        rootData.turn = 'o';
                        rootData.tableData = [['','',''],['','',''],['','',''],];
                    }
                    rootData.turn = rootData.turn === 'o' ? 'x' : 'o' ;
                }
            }  
        }
    }
}
/*
컴포넌트의 숫자가 많아지다 보면 $root, $parent, props로 부모 컴포넌트와 통신하는 것은 매우 복잡하다
따라서, 중앙 통제실 역할을 하는 Vuex를 사용함
++ Vuex를 쓰면 비동기도 깔끔하게 다룰 수 있다.
*/
</script>