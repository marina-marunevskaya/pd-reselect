import {
	ITEM_LIST_INIT,
	ITEM_ADD,
	ITEM_UPDATE,
	ITEM_DELETE,
	ITEM_CLEAR_LIST_ITEMS
} from '../actions/itemActions';

import { createReducer } from './createReducer';

const initialState = {
	items: {}
};

export const itemReducer = createReducer(
	initialState,
	{
		[ITEM_LIST_INIT]: (state, { listId }) => ({
			...state,
			items: {
				...state.items,
				[listId]: []
			}
		}),
		[ITEM_ADD]: (state, { listId, ...newItem }) => ({
			...state,
			items: {
				...state.items,
				[listId]: [
					...state.items[listId],
					newItem
				]
			}
		}),
		[ITEM_UPDATE]: (state, { listId, ...updatedItem }) => ({
			...state,
			items: {
				...state.items,
				[listId]: state.items[listId].map(
					item => (
						item.id === updatedItem.id
							? updatedItem
							: item
					)
				)
			}
		}),
		[ITEM_DELETE]: (state, { id, listId }) => ({
			...state,
			items: {
				...state.items,
				[listId]: state.items[listId].filter(item => item.id !== id)
			}
		}),
		[ITEM_CLEAR_LIST_ITEMS]: (state, { listId }) => {
			let items = {};

			for (let list in state.items) {
				if (list !== listId) {
					items[list] = state.items[list];
				}
			}

			return {
				...state,
				items
			};
		}
	}
);
