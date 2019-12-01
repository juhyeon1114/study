<template>
    <div>
        <!-- <div id="screen" v-bind:class="state">{{message}}</div> -->
        <div id="screen" :class="state" @click="changeState">
            {{message}}
        </div>
        <!-- <div v-if="result.length"> -->
        <template v-show="result.length">
            <!-- *v-if 와 v-show의 차이점 -->
            <!-- v-if인 경우 조건이 false일 경우 태그 자체를 지워버리고, 
            v-show는 조건이 false일 경우 태그를 display:none -->
            <div>평균 시간 : {{average}}ms</div>
            <button @click="onReset">리셋</button>
        </template>
    </div>
</template>
<script>
    let startTime;
    let endTime;
    let timeout;
    export default { 
        data(){
            return {
                result: [],
                state: "waiting",
                message: "클릭해서 시작",
                flag: false,
            }
        },
        computed: {
            // view에 들어가는 data를 가공해서 쓸 때 사용하다.
            // computed를 쓰는 이유는 아래의 return값이 caching이 되어서 실행되기 때문이다.
            // 즉, average 값이 바뀌었을 때만 아래의 계산이 실행됨. => 성능 향상
            average(){
                return Math.floor(this.result.reduce((a,c) => a+c,0)/ this.result.length) || 0
            }
        },
        methods: {
            onReset(){
                this.result = [];
            },
            changeState(){
                if(this.state === "waiting"){
                    this.state = "ready";
                    this.message = "준비";
                    timeout = setTimeout(()=>{
                        this.flag = true;
                        this.changeState();
                        this.flag = false;
                        startTime = new Date();
                        this.state = "now";
                        this.message = "클릭";
                    }, Math.floor(Math.random()*1000) + 2000);
                } else if(this.state === "ready"){
                    if(!this.flag){
                        clearTimeout(timeout);
                        this.state = "waiting";
                        this.message = "부정출발. 다시 시작"
                    }
                } else if(this.state === "now"){
                    endTime = new Date();
                    this.result.push(endTime - startTime);
                    this.state = "waiting";
                    this.message = "클릭해서 시작";
                }
            },
        }
    };
</script>

<style scoped>
    #screen{
        width: 500px;
        height: 400px;
        text-align: center;
        user-select: none;
        font-size: 36px;
    }
    #screen.waiting{
        background-color: aqua;
    }
    #screen.ready{
        background-color: red;
        color: white;
    }
    #screen.now{
        background-color: green;
    }
</style>