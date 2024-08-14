"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem{
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartState{
    items: CartItem[];
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity++;
            } else {
                state.items.push(action.payload);
            }
        },

        removeItem: (state, action: PayloadAction<number>) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if(!existingItem){
                throw new Error('item not found in cart');
            }
            state.items = state.items.filter(item => item.id != action.payload);
        },

        clearCart: (state) => {
            if(state.items.length === 0){
                throw new Error('cart is already empty');
            }
            state.items = []
        },

        updateQuantity: (state, action: PayloadAction<{id: number, quantity: number}>) => {
            if(action.payload.quantity <= 0){
                throw new Error('quantity must be greater than 0');
            }
            const item = state.items.find(item => item.id === action.payload.id);
            if(item){
                item.quantity = action.payload.quantity;
            } else {
                throw new Error('item not found in cart');
            }
        }
    }
});

export const { addItem, removeItem, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;