import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import navReducer from './features/nav-slice';
import profileReducer from './features/profile-slice';

const persistConfig = {
    key: 'root',
    storage: storage
}

const store = configureStore({
    reducer: {
        navReducer: navReducer,
        profileReducer: persistReducer(persistConfig, profileReducer)
    }
});

const persistor = persistStore(store);

export { store, persistor };


