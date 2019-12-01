<template>
    <div>
        <h1>{{result}}</h1>
        <form v-on:submit.prevent="doSubmit">
            <input ref="answer" maxlength="4" v-model="value">
            <button type="submit">입력</button>
        </form>
        <div>시도 : {{tries.length}}</div>
        <ul>
            <li v-for="t in tries" v-bind:key="t">
                <div>{{t.try}}</div>
                <div>{{t.result}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    const getNumber = ()=>{
        let candidates = [1,2,3,4,5,6,7,8,9];
        const array = [];
        for(let i=0; i<4; i ++){
            const choosen = candidates.splice(Math.floor(Math.random()*(9-i)),1)[0];
            array.push(choosen);
        }
        return array;
    }
    export default { // main.js 에서 import. numberBaseball 객체를 import할 수 있다.
        data(){
            return {
                answer: getNumber(),
                tries: [],
                value: "",
                result: "",
            }
        },
        methods: {
            doSubmit(e){
                if(this.value === this.answer.join("")){
                    this.tries.push({
                        try: this.value,
                        result: "홈런",
                    });
                    this.result = "홈런";
                    alert("홈런");
                    this.tries = [];
                } else {
                    let strike = 0;
                    let ball = 0;
                    const answerArray = this.value.split("").map(v=> parseInt(v));
                    for (let i=0; i<4; i++){
                        if(answerArray[i] === this.answer[i]){ // 숫자 자리수 모두 정답
                            strike++;
                        } else if(this.answer.includes(answerArray[i])){ // 숫자만 정답
                            ball++;
                        }
                    }
                    this.tries.push({
                        try: this.value,
                        result: `${strike} 스트라이크, ${ball} 볼 입니다.`
                    })
                    if(this.tries.length > 9){                         
                        this.result =  `실패!!`;
                        alert(`답= ${this.answer.join(',')}`);
                        this.answer = getNumber();
                        this.tries = [];
                        this.$refs.answer.focus();
                    }
                }
                this.value = "";
                this.$refs.answer.focus();
            }
        }
    };
</script>

<style>
</style>