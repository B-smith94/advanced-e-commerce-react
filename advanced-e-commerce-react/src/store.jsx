import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducer from './features/products/productsSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer, // cartSlice.reducer, handles state. Use dispatch(<action>) to call, cartReducer will find action that matches and perform that action
    },
});

// store - the central hub of our application state
// reducer - similar to our "set" hooks--Defines how our state changes
// Slices - breaks our state into more manageable pieces