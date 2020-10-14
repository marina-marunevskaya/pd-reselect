import {
	LIST_ADD,
	LIST_UPDATE,
	LIST_DELETE
} from '../actions/listActions';

import { createReducer } from './createReducer';

const initialState = {
	lists: []
};

export const listReducer = createReducer(
	initialState,
	{
		[LIST_ADD]: (state, newList) => ({
			...state,
			lists: [...state.lists, newList]
		}),
		[LIST_UPDATE]: (state, updatedList) => ({
			...state,
			lists: state.lists.map(
				list => (
					list.id === updatedList.id
						? updatedList
						: list
				)
			)
		}),
		[LIST_DELETE]: (state, { id }) => ({
			...state,
			lists: state.lists.filter(list => list.id !== id)
		})
	}
);
