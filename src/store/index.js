import { createStore } from "redux";

const counterInitialState = {counter: 0, showCounter: true};

const counterReducer = (state= counterInitialState, action) => {
    if (action.type === 'increment') {
     return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
};

const store = createStore(counterReducer);

export default store;