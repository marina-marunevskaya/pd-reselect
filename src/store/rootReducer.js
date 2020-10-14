import { combineReducers } from 'redux';

import { itemReducer } from '../reducers/itemReducer';
import { listReducer } from '../reducers/listReducer';

export const rootReducer = combineReducers(
	{
		items: itemReducer,
		lists: listReducer
	}
);
