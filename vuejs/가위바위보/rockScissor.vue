<template>
    <div>
        <div id="computer" :style="computeStyle"></div>
        <div>
            <button @click="onClickBtn('바위')">바위</button>
            <button @click="onClickBtn('가위')">가위</button>
            <button @click="onClickBtn('보')">보</button>
        </div>
        <div>{{result}}</div>
        <div>현재 : {{score}}점</div>
        <!-- <lifecycle-example v-if=true></lifecycle-example> -->
    </div>
</template>
<script>
    const rspCoords = {
        바위: '0',
        가위: '-140px',
        보: '-280px'
    }
    const scores = {
        바위: 0,
        가위: 1,
        보: -1
    }
    const computerChoice = (imgCoord) => {
        return Object.entries(rspCoords).find((v)=>{
            return v[1] === imgCoord;
        })[0];
    }
    let interval = null;
    let timeout = null;
    let flag = true;

    export default { 
        data(){
            return {
                imgCoord: rspCoords.바위,
                result: "",
                score: ""
            }
        },
        computed: {
            computeStyle(){
                return {background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${this.imgCoord} 0 `}
            }
        },
        methods: {
            changeHand(){
                interval = setInterval(()=>{
                    if(this.imgCoord === rspCoords.바위){
                        this.imgCoord = rspCoords.가위;
                    } else if(this.imgCoord === rspCoords.가위){
                        this.imgCoord = rspCoords.보;
                    } else if(this.imgCoord === rspCoords.보){
                        this.imgCoord = rspCoords.바위;
                    }
                },100);
            },
            async onClickBtn(sel){
                if (flag){
                    flag = false;
                    clearTimeout(timeout);
                    clearInterval(interval);
                    const myScore = scores[sel];
                    const computerScore = scores[computerChoice(this.imgCoord)];
                    const diff = myScore - computerScore;
                    if(diff === 0){
                        this.result = "비김";
                    } else if ([-1,2].includes(diff)) {
                        this.result = "이김";
                        this.score += 1;
                    } else {
                        this.result = "짐";  
                        this.score -= 1;  
                    }
                    timeout = setTimeout(()=>{
                        this.changeHand();
                        flag = true;
                    },1000)
                }
            },

        },
        /*라이프 사이클*/
        created(){
            console.log("created"); // 데이터들 모두 준비 완료
        },
        mounted(){
            console.log("mounted"); // 준비된 데이터들로 화면에 표시
            this.changeHand();
        },
        updated(){
            console.log("updated"); //데이터가 변경되는 경우
        },
        boforeDestoyed(){
            clearInterval(interval);
        },
        destoyed(){
            console.log("destoyed"); // 뷰 인스턴스가 제거된 후에 호출
        }
        /* /라이프 사이클*/
    };
</script>

<style scoped>
    #computer {
        height: 200px;
        width: 140px;
    }
</style>