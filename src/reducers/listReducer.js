import {
	LIST_ADD,
	LIST_UPDATE,
	LIST_DELETE
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
		}),
		[LIST_UPDATE]: (state, updateItem) => ({
			...state,
			items: state.items.map(
				item => (
					item.id === updateItem.id
						? updateItem
						: item
				)
			)
		}),
		[LIST_DELETE]: (state, { id }) => ({
			...state,
			items: state.items.filter(item => item.id !== id)
		})
	}
);
