import { createStore } from 'redux';

export default createStore((state, action) => {
    if (state === undefined) {
        return {
            number: 0,
        }
    }

    if (action.type === 'INCREMENT') {
        const newState = {
            ...state,
            number: state.number + Number(action.size),
        }
        console.log(newState);
        return newState;
    }    

    return state;
}, window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION__());  