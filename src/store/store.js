import { configureStore } from '@reduxjs/toolkit';
import { purchasesSlice } from './purchases.slice';

export const store = configureStore({
	reducer: {
		purchases: purchasesSlice.reducer,
	},
});
