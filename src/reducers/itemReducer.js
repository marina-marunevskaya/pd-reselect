import {
	ITEM_ADD,
	ITEM_UPDATE,
	ITEM_DELETE,
	ITEM_CLEAR_LIST_ITEMS
} from '../actions/itemActions';

import { createReducer } from './createReducer';

const initialState = {
	items: []
};

export const itemReducer = createReducer(
	initialState,
	{
		[ITEM_ADD]: (state, newItem) => ({
			...state,
			items: [...state.items, newItem]
		}),
		[ITEM_UPDATE]: (state, updatedItem) => ({
			...state,
			items: state.items.map(
				item => (
					item.id === updatedItem.id
						? updatedItem
						: item
				)
			)
		}),
		[ITEM_DELETE]: (state, { id }) => ({
			...state,
			items: state.items.filter(item => item.id !== id)
		}),
		[ITEM_CLEAR_LIST_ITEMS]: (state, { listId }) => ({
			...state,
			items: state.items.filter(item => item.listId !== listId)
		})
	}
);
