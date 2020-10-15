import { createFullActionType } from '../utils/createFullActionType';

const NAMESPACE = 'ITEM';

const createItemFullActionType = createFullActionType(NAMESPACE);

export const ITEM_LIST_INIT = createItemFullActionType('ITEM_LIST_INIT');
export const ITEM_ADD = createItemFullActionType('ITEM_ADD');

export const initItemList = (
	listId
) => ({
	type: ITEM_LIST_INIT,
	payload: listId
});

export const addItem = (
	item
) => ({
	type: ITEM_ADD,
	payload: item
});
