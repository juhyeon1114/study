<template>
    <td @click="onClickTd">{{cellData}}</td>
</template>

<script>
import EventBus from './EventBus';
export default {
    props:{
        cellData: String,
        rowIndex: Number,
        cellIndex: Number,
    },
    methods:{
        onClickTd(){
            if(this.cellData) return;
            EventBus.$emit('clickTd',this.rowIndex, this.cellIndex);
            //이벤트 버스에 clickTd라는 이름으로 되어 있는 이벤트를 실행
            // 매개변수로 rowIndex, cellIndex를 전달
        }
    }
}
</script>