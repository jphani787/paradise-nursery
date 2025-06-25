import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts: []
}

const cartSlice = createSlice({
    name: 'cartsslice',
    initialState,
    reducers: {
        addToCart: (state, action) => {

        }
    },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;