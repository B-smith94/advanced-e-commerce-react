import { createSlice } from '@reduxjs/toolkit';

const initialState = { // defines initial state
    items: {}, // id: quantity
    totalItems: 0,
};

export const cartSlice = createSlice({ 
    name: 'cart', // name of the slice
    initialState, 
    reducers: { // define changes to the state
        addItem: (state, action) => { // action - key value pair where the key is the name of the action, and the value is a function
            const { id } = action.payload;
            if (state.items[id]) {
                state.items[id] += 1;
            } else {
                state.items[id] = 1;
            }
            state.totalItems += 1;
        },
        removeItem: (state, action) => { 
            const { id } = action.payload;
            if (state.items [id]) {
                state.items[id] -= 1; 
                if (state.items[id] === 0) {
                    delete state.items[id];
                }
                state.totalItems -= 1;
            }
        },
        checkout: (state) => {
            state.items={}; 
            state.totalItems = 0;
        },
    },
});

export const { addItem, removeItem, checkout } = cartSlice.actions; // allows actions to be called in any other componenets

export default cartSlice.reducer; // becomes cartReducer in store.jsx