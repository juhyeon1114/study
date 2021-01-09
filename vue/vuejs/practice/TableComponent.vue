<template>
    <div>
        <table>
            <tr v-for="(rows, rowIdx) in tableData" :key="rowIdx">
                <td 
                    v-for="(cols, colIdx) in rows" 
                    :key="colIdx"
                    @click="clickTd(rowIdx, colIdx)"
                >
                {{cols}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import store, { CLICK_COL, code } from './store';
import { mapState } from 'vuex';


export default {
    store,
    computed : {
        ...mapState(['row','col','mine','tableData'])
    },
    methods : {
        clickTd(r,c){
            this.$store.commit('CLICK_COL', {rowIdx:r, colIdx:c});
        }
    }
    
}
</script>
<style scoped>
    table {
        margin-top: 40px;
        margin-bottom: 40px;
        border-collapse: collapse
    }
    td {
        width : 40px; 
        height : 40px;
        border : 1px solid black;
    }
</style>