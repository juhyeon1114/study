<template>
    <div>
        <div v-if="winner">{{winner}}의 승리</div>
        <table-comp :table-data="tableData"/>
        <div>{{turn}}의 턴</div>
    </div>
</template>
<script>
    import TableComp from './TableComp';
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