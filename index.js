// state - count:0
// action - increment, decrement, reset
// reducer - handle logics
// store - store states
// dispatch

const { createStore } = require("redux");

// 1. Defining constant variables
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

// 2. State
const initialState = {
    count: 0,
}

// 3. Action
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    };
}

const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    };
}

const resetCounterAction = () => {
    return {
        type: RESET,
    };
}

const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value // Here, payload receives value
    };
}

// 4. Reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: 0
            }
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            state;
    }
};

// 5. Store
const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState())
})
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(10)); 