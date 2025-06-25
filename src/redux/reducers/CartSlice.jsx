import { ActionTypes } from "../constans/action-types";

const initialState = {
    items: [],
    add_item: []
}

const addItem = (state, payload) => {
    const existItem = state.add_item.find(item => item.id === payload.id);
    if (existItem) {
        existItem.quantity = 1 + payload.quantity;
        return { ...state, add_item: [...state.add_item] };
    }
    return { ...state, add_item: [...state.add_item, { ...payload, quantity: 1 }] };
}

const updateQuantity = (state, payload) => {
    const item = state.add_item.find(item => item.id === payload.id);
    item.quantity = item.quantity - 1;
    if (!item.quantity) {
        return updateQuantity(state, payload);
    }
    return { ...state, add_item: [...state.add_item] };
}

const removeItem = (state, payload) => {
    const existItems = state.add_item.filter(addItem => addItem.id !== payload.id)
    return { ...state, add_item: [...existItems] };
}

export const CartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ITEMS:
            return { ...state, items: payload };
        case ActionTypes.ADD_ITEM:
            return addItem(state, payload);
        case ActionTypes.UPDATE_ITEM:
            return updateQuantity(state, payload);
        case ActionTypes.REMOVE_ITEM:
            return removeItem(state, payload);
        default:
            return state;
    }
};

