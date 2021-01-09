import Vue from 'vue';
import VueRouter from 'vue-router';

import NumberBaseball from '../숫자야구/NumberBaseball';
import ResponseCheck from '../반응속도/ResponseCheck';
import RockScissor from '../가위바위보/RockScissor';
import LottoGenerator from '../로또/LottoGenerator';
import GameMatcher from './GameMatcher';

Vue.use(VueRouter);

export default new VueRouter ({
    mode : 'history', // default = hash (#) 라우터
    routes: [
        {path: '/number-baseball', component: NumberBaseball},
        {path: '/response-check', component: ResponseCheck},
        {path: '/rock-scissor', component: RockScissor},
        {path: '/lotto-generator', component: LottoGenerator},
        {path: '/game/:name', component: GameMatcher}, // 동적 라우트 매칭
    ]
});