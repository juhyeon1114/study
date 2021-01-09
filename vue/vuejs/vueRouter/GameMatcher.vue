<template>
    <div>
        <div v-if="currentGame === 'number-baseball'">
            <number-baseball></number-baseball>
        </div>
        <div v-else-if="currentGame === 'response-check'">
            <response-check></response-check>
        </div>
        <div v-else-if="currentGame === 'lotto-generator'">
            <lotto-generator></lotto-generator>
        </div>
        <div v-else>일치하는 게임이 없습니다</div>
    </div>
</template>

<script>
import NumberBaseball from '../숫자야구/NumberBaseball';
import ResponseCheck from '../반응속도/ResponseCheck';
import RockScissor from '../가위바위보/RockScissor';
import LottoGenerator from '../로또/LottoGenerator';

export default {
    components : {
        NumberBaseball,
        ResponseCheck,
        LottoGenerator
    },
    mounted(){

    },
    computed : {
        currentGame(){
            console.log(this.$route.params.name);
            return this.$route.params.name;
        }
    }
}
</script>