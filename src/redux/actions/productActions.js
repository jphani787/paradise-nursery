import { ActionTypes } from "../constans/action-types";
export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const addProduct = (product) => {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const removeProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
        payload: product
    }
}

export const deleteProduct = (product) => {
    return {
        type: ActionTypes.DELETE_PRODUCT,
        payload: product
    }
}