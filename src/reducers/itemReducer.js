import {
	ITEM_LIST_INIT,
	ITEM_ADD
} from '../actions/itemActions';

import { createReducer } from './createReducer';

const initialState = {
	items: {}
};

export const itemReducer = createReducer(
	initialState,
	{
		[ITEM_LIST_INIT]: (state, listId) => ({
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
		})
	}
);
