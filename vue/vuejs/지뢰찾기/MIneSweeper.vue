<template>
    <div>
        <mine-form></mine-form>
        <div>{{timer}}</div>
        <table-comp></table-comp>
        <div>{{result}}</div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'; 
    import store, { INCREMENT_TIMER } from './store';
    import TableComp from './TableComp';
    import MineForm from './MineForm';

    let interval;

    export default {
        store,
        components : {
            TableComp,
            MineForm,
        },
        computed:{
            ...mapState(['timer','result','halted']),
        },
        watch: {
            halted(value, oldValue){
                if(value === false){ // 게임시작
                    interval = setInterval(()=>{
                        this.$store.commit(INCREMENT_TIMER);
                    }, 1000)
                } else { // 게임중단
                    clearInterval(interval);
                }
            }
        }
    };
</script>

<style>
    table{
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 50px;
        height: 50px;
        text-align: center;
        font-size: 24px;
        user-select: none;
    }

</style>