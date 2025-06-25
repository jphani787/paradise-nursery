import { ActionTypes } from "../constans/action-types";
export const setItems = (items) => {
    return {
        type: ActionTypes.SET_ITEMS,
        payload: items
    }
}

export const addItem = (item) => {
    return {
        type: ActionTypes.ADD_ITEM,
        payload: item
    }
}

export const updateItem = (item) => {
    return {
        type: ActionTypes.UPDATE_ITEM,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: ActionTypes.REMOVE_ITEM,
        payload: item
    }
}