import { combineReducers } from 'redux';

import { itemReducer } from './itemReducer';
import { listReducer } from './listReducer';

export const rootReducer = combineReducers({
	items: itemReducer,
	lists: listReducer
});
