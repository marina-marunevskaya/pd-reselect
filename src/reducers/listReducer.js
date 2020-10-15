import {
	LIST_ADD
} from '../actions/listActions';

import { createReducer } from './createReducer';

const initialState = {
	items: []
};

export const listReducer = createReducer(
	initialState,
	{
		[LIST_ADD]: (state, newItem) => ({
			...state,
			items: [...state.items, newItem]
		})
	}
);
