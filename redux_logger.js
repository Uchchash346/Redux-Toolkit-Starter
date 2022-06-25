// Importing modules or packages
const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// 1. constant variables for Product Reducer
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// 2. state for Products
const initialProductState = {
    products: ["sugar", "salt"],
    numberOfProducts: 2,
}

// 3. Create action for Products
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    };
}

const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    };
}

// 4. Reducer for Products
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            };
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        default:
            return state;
    }
}

// 5. store
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
    console.log(store.getState());
});

// 6. Dispatch the action
store.dispatch(getProducts());
store.dispatch(addProduct("pen"));
store.dispatch(addProduct("book"));