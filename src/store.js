import { configureStore } from '@reduxjs/toolkit';
import overviewReducer from './redux/displayContent';

export const store = configureStore({
    reducer: {
        overview: overviewReducer,
    }
})