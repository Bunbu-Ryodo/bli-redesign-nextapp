import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        martialArts: false,
        department: false,
        personalized: false,
        wishlist: false,
        account: false,
        cart: false
    }
}

export const nav = createSlice({
    name: "nav",
    initialState,
    reducers: {
        toggleMartialArts: function(state){
            const newState = {value: {}};
            state.value.department ? newState.value.department = false : newState.value.department = state.value.department; 
            state.value.personalized? newState.value.personalized = false : newState.value.personalized = state.value.personalized;  
            newState.value.martialArts = !newState.value.martialArts;
            newState.value.wishlist = state.value.wishlist;
            newState.value.account = state.value.account;
            newState.value.cart = state.value.cart;
            return newState;
        },
        toggleDepartment: function(state){
            const newState = {value:{}};
            state.value.martialArts ? newState.value.martialArts =  false : newState.value.martialArts = state.value.martialArts;
            state.value.personalized ? newState.value.personalized = false : newState.value.personalized = state.value.personalized; 
            newState.value.department = !state.value.department;
            newState.value.wishlist = state.value.wishlist;
            newState.value.account = state.value.account;
            newState.value.cart = state.value.cart;
            return newState;
        },
        togglePersonalized: function(state){
            const newState = {value:{}};
            state.value.martialArts ? newState.value.martialArts = false : newState.value.martialArts = state.value.martialArts;
            state.value.department ? newState.value.department = false : newState.value.department = state.value.department; 
            newState.value.personalized = !state.value.personalized;
            newState.value.wishlist = state.value.wishlist;
            newState.value.account = state.value.account;
            newState.value.cart = state.value.cart;
            return newState;
        },
        toggleWishlist: function(state){
            const newState = {value:{}};
            newState.value.martialArts = state.value.martialArts;
            newState.value.department = state.value.department;
            newState.value.personalized = state.value.personalized;
            state.value.account ? newState.value.account = false : newState.value.account = state.value.account;
            state.value.cart ? newState.value.cart = false : newState.value.cart = state.value.cart;
            newState.value.wishlist = !state.value.wishlist;
            return newState;
        },
        toggleAccount: function(state){
            const newState = {value:{}};
            newState.value.martialArts = state.value.martialArts;
            newState.value.department = state.value.department;
            newState.value.personalized = state.value.personalized;
            state.value.wishlist ? newState.value.wishlist = false : newState.value.wishlist = state.value.wishlist;
            state.value.cart ? newState.value.cart = false : newState.value.cart = state.value.cart;
            newState.value.account = !state.value.account;
            return newState;
        },
        toggleCart: function(state){
            const newState = {value:{}}
            newState.value.martiaArts = state.value.martialArts;
            newState.value.department = state.value.department;
            newState.value.personalized = state.value.personalized;
            state.value.wishlist ? newState.value.wishlist = false : newState.value.wishlist = state.value.wishlist;
            state.value.account ? newState.value.account = false : newState.value.account = state.value.account;
            newState.value.cart = !state.value.cart;
            return newState; 
        }
    } 
});

export const { toggleMartialArts, toggleDepartment, togglePersonalized, toggleWishlist, toggleAccount, toggleCart } = nav.actions;
export default nav.reducer;