<template>
    <div>
        <div v-if="winner">{{winner}}의 승리</div>
        <table-comp :table-data="tableData"/>
        <div>{{turn}}의 턴</div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    // store에서 state나 mutation이 필요할 때마다 computed에 선언하는 것은 복잡.
    // 위의 문제를 해결하기 위해서 mpaState 사용
    import store from './store';
    import TableComp from './TableComp';
    export default {
        store,
        components : {
            TableComp,
        },
        computed:{
            //아래의 형식말고도 디테일하고 자유롭게 mapState 선언 가능
            ...mapState(['winner','turn','tableData']),
            
            // winner(){
            //     return this.$store.state.winner;
            // },
            // turn(){
            //     return this.$store.state.turn;
            // },
            // tableData(){
            //     return this.$store.state.tableData;
            // }
        },
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