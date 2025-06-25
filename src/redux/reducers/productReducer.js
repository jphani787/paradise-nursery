import {ActionTypes} from "../constans/action-types";

const initialState = {
    products: [],
    add_product: []
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products: payload};
        case ActionTypes.ADD_PRODUCT:
            const existProduct = state.add_product.find(product => product.id === payload.id);
            if(existProduct){
                existProduct.quantity = 1 + payload.quantity;
                return {...state, add_product: [...state.add_product]};
            }
            return {...state, add_product: [...state.add_product, {...payload, quantity: 1}]};
        case ActionTypes.REMOVE_PRODUCT:
            const product = state.add_product.find(product => product.id === payload.id);
            product.quantity = product.quantity - 1;
            if(!product.quantity) {
                return updateProductState(state, payload);
            }
            return {...state, add_product: [...state.add_product]};
        case ActionTypes.DELETE_PRODUCT:
            return updateProductState(state, payload);
        default:
            return state;
    }
};

const updateProductState = (state, payload) => {
    const existProducts = state.add_product.filter(addProduct => addProduct.id !== payload.id)
    return {...state, add_product: [...existProducts]};
}
