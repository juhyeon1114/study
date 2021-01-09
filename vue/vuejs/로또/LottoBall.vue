<template>
    <div class="ball" :style="{backgroundColor:backStyle}">{{number}}</div>
</template>
<script>
    export default {
        props: { 
            //부모 컴포넌트에서 값을 받아오는 문법
            number: Number,
        },
        computed :{
            backStyle(){
                let background;
                if(this.number < 10){
                    background = "red";
                } else if(this.number < 20){
                    background = "orange";
                } else if(this.number < 30){
                    background = "yellow";    
                } else if(this.number < 40){
                    background = "green";    
                } else {
                    background = "blue";    
                }
                return background;
            }
        },
    };
</script>

<style>
    .ball {
        display: inline-block;
        border: 1px solid black;
        border-radius: 20px;
        width:40px;
        height:40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        margin-right: 20px;
    }
</style>