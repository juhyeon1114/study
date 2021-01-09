<template>
    <div>
        <tr-comp v-for="(rowData, index) in tableData" :key="index" :row-index="index"></tr-comp>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import TrComp from './TrComp';
    export default {
        components : {
            TrComp,
        },
        computed:{
            ...mapState(['tableData']),
        }
    };
</script>

<style scoped>
    
</style>