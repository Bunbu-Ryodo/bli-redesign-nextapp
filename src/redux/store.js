import { configureStore } from '@reduxjs/toolkit';
import navReducer from './features/nav-slice';
import profileReducer from './features/profile-slice';

export const store = configureStore({
    reducer: {
        navReducer,
        profileReducer
    }
});


