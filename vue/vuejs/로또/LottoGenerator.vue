<template>
    <div>
        <div>당첨 숫자</div>
        <div id="resultBox">
            <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball"></lotto-ball>
        </div>
        <div>보너스</div>
        <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
        <button v-if="reDo" @click="onClickRedo">한번 더!</button>
    </div>
</template>
<script>
    import LottoBall from './LottoBall';
    function getWinNumbers(){
        const candidate = Array(45).fill().map((v,i) => i + 1 );
        const shuffle = [];
        while (candidate.length > 0){
            shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
        }
        const bonusNumber = shuffle[shuffle.length - 1];
        const winNumbers = shuffle.slice(0,6).sort((p,c)=>{p-c});
        // console.log([...winNumbers, bonusNumber]);
        return [...winNumbers, bonusNumber];
    }
    const timeouts = [];

    export default {
        components : {
            // "lotto-ball" : LottoBall,
            LottoBall,
            // 위와 같은 형식으로 적으면 캐멀 케이스를 케밥케이스로 vue가 바꿔주기 때문에 요약해서 코딩할 수 있다.
        },
        data(){
            return {
                winNumbers: getWinNumbers(),
                winBalls: [],
                bonus: null,
                reDo: false,
            }
        },
        methods: {
           onClickRedo(){
                this.winNumbers = getWinNumbers();
                this.winBalls = [],
                this.bonus = null,
                this.reDo = false
                this.showBalls();
           },
           showBalls(){
                for(let i=0; i< this.winNumbers.length -1; i++){
                    timeouts[i] = setTimeout(()=>{
                        this.winBalls.push(this.winNumbers[i]);
                    }, (i+1) * 400);
                }
                timeouts[6] = setTimeout(()=>{
                    this.bonus = this.winNumbers[6];
                    this.reDo = true;
                },2800);
           }
        },
        mounted(){
            this.showBalls();
        },
        beforeDestroy(){
            // 셑타임이나 셑인터벌은 메모리 누수 방지를 위해서 clear해주기
            timeouts.forEach((t)=>{
                cleartimeout(t);
            })
        }
        /* 비추,
        watch: {
            // 값이 바뀌었는지 아닌지 감시하는 기능
            // 아래의 함수는 this.winBalls의 변경을 감지
            bonus(value, oldValue){
                if(value === null){
                    this.showBalls();
                }
            }

        }
        */
    };
</script>

<style scoped>
    
</style>