<template>
    <div>
        <tr-comp v-for="(rowData, index) in tableData" :key="index" :row-data="rowData" :row-index="index"></tr-comp>
    </div>
</template>
<script>
    import TrComp from './TrComp';

    export default {
        props:{
            tableData: Array,
        },
        components : {
            TrComp,
        },
    };
</script>

<style scoped>
    
</style>