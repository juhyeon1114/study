<template>
    <div>
        <form tyep="submit">
            <input type="number" :value="row" @change="changeRow">
            <input type="number" :value="col" @change="changeCol">
            <input type="number" :value="mine" @change="changeMine">
            <button @click.prevent="onSubmit" type=submit>시작</button>
        </form>
        <table-component></table-component>
        <div>{{timer}} 초 경과</div>
    </div>
</template>
<script>
import store from './store';
import { mapState } from 'vuex';
import TableComponent from './TableComponent';

export default {
    store,
    components : {
        TableComponent
    },
    computed : {
        ...mapState(['timer']),
    },
    data(){
        return {
            row: 10,
            col: 10,
            mine: 20,
        }
    },
    methods : {
        onSubmit(){
            this.$store.commit('START_GAME', {row:this.row, col:this.col, mine:this.mine});
        },
        changeRow(e){
            this.row = Number(e.target.value);
        },
        changeCol(e){
            this.col = Number(e.target.value);
        },
        changeMine(e){
            this.mine = Number(e.target.value);
        }
    }
}
</script>
<style scoped>
    input {
        width: 40px;
    }
</style>