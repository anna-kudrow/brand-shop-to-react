import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	purchasesList: [],
};

export const purchasesSlice = createSlice({
	name: 'purchases',
	initialState,
	reducers: {
		addPurchase: (state, action) => {
			state.purchasesList.push(action.payload);
		},
	},
});

export default purchasesSlice.reducer;
export const { addPurchase } = purchasesSlice.actions;
