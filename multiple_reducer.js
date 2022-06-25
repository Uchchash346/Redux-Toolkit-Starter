// Importing modules or packages
const { createStore, combineReducers } = require("redux");

// ---------- Reducer -> 01 ----------
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


// ----------------------------------------------------------------
// ---------- Reducer -> 02 ----------
// 1. constant variables for Product Reducer
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// 2. state for Cart
const initialCartState = {
    cart: ["sugar"],
    numberOfProducts: 1,
}

// 3. Create action for Products
const getCart = () => {
    return {
        type: GET_CART_ITEMS,
    };
}

const addCart = (product) => {
    return {
        type: ADD_CART_ITEM,
        payload: product,
    };
}

// 4. Reducer for Products
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
            };
        case ADD_CART_ITEM:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            };
        default:
            return state;
    }
}


// Root Reducer
// For multiple reducers, we can use root reducers
const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})
// 5. store
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});

// 5. store
const cartStore = createStore(rootReducer);
cartStore.subscribe(() => {
    console.log(cartStore.getState());
});
// 6. Dispatch the action
store.dispatch(getProducts());
store.dispatch(addProduct("pen"));

// 6. Dispatch the action
cartStore.dispatch(getCart());
cartStore.dispatch(addCart("rice"));