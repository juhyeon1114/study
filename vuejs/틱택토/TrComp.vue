<template>
    <tr>
        <td-comp v-for="(cellData, index) in rowData" :key="index" :cell-data="cellData" :row-index="rowIndex" :cell-index="index"></td-comp>
    </tr>
</template>

<script>
    import TdComp from './TdComp';
    export default {
        props:{
            rowData: Array,
            rowIndex: Number,
        },
        components : {
            TdComp,
        },
    }
</script>