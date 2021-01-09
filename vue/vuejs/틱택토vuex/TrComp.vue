<template>
    <tr>
        <td-comp v-for="(cellData, index) in rowData" :key="index" :row-index="rowIndex" :cell-index="index"></td-comp>
    </tr>
</template>

<script>
    import {mapState} from 'vuex';
    import TdComp from './TdComp';
    export default {
        props:{
            rowIndex: Number,
        },
        components : {
            TdComp,
        },
        computed: {
            rowData(){
                return this.$store.state.tableData[this.rowIndex];
            },
        }
    }
</script>