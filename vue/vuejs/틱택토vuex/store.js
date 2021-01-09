import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// Vue와 vuex 연결. this.$store가 생긴것
// 다른 플러그인, 라이브러리를 사용할 때는 이처럼 Vue.use();를 해주어야함

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

/*
위와 같이 변수를 선언하여 그 변수에 mutation들을 저장한 이유는
다른 컴포넌트에서 import해서 사용할 때, 오타를 쉽게 잡아내기 위해서이다.
*/
/*
****export와 export default의 차이
-> export default는 다른 파일에서 import할 때 이름을 마음대로 지어줄수도 있고 바로 가져올 수 있다.
-> 보동 export default는 파일 하나에서 가장 중요한 export를 export default로 설정한다.
-> export 는 import할 때 export한 이름과 일치 해야 한다. 여러개를 동시에 가져올 수도 있다.
-> export const는 import할 때 중괄호를 써야한다.
*/

export default new Vuex.Store({
    state: { // vue의 data와 비슷
        tableData : [
            ['','',''],
            ['','',''],
            ['','',''],
        ],
        turn: 'o',
        winner: null,
    },
    getters: { // vue의 computated와 비슷
        turnMsg(state){
            return state.turn + "님이 승리";
        }
    },
    mutations: { //state를 수정할 때 사용함. (동기적으로)
        [SET_WINNER](state, winner){
            state.winner = winner;
        },
        [CLICK_CELL](state, {row, cell}){ 
            // mutation에서 사용가능한 매개변수는 2개
            // 첫번째는 state, 두번째는 임의의 매개변수이다.
            // 하지만, 2개 이상의 매개변수가 필요할 경우 중괄호로 여러 변수를 받을 수 있다.
            Vue.set(state.tableData[row], cell, state.turn);
        },
        [CHANGE_TURN](state){
            state.turn = state.turn === 'o' ? 'x' : 'o';
        },
        [RESET_GAME](state){
            state.turn = 'o';
            state.tableData = [
                ['','',''],
                ['','',''],
                ['','',''],
            ];
        },
        [NO_WINNER](state){
            state.winner = '무승부';
        }
    },
    actions: { // 비동기를 사용할 때, 또는 여러 뮤테이션을 연달아 실행할 때

    }
});