export const ITEM_LIST_INIT = 'ITEM_LIST_INIT';
export const ITEM_ADD = 'ITEM_ADD';
export const ITEM_UPDATE = 'ITEM_UPDATE';
export const ITEM_DELETE = 'ITEM_DELETE';
export const ITEM_CLEAR_LIST_ITEMS = 'ITEM_CLEAR_LIST_ITEMS';

export const initListItems = (
	listId
) => ({
	type: ITEM_LIST_INIT,
	payload: {
		listId
	}
});

export const addItem = (
	id,
	listId,
	name,
	price
) => ({
	type: ITEM_ADD,
	payload: {
		id,
		listId,
		name,
		price
	}
});

export const updateItem = (
	id,
	listId,
	name,
	price
) => ({
	type: ITEM_UPDATE,
	payload: {
		id,
		listId,
		name,
		price
	}
});

export const deleteItem = (
	id,
	listId
) => ({
	type: ITEM_DELETE,
	payload: {
		id,
		listId
	}
});

export const clearListItems = (
	listId
) => ({
	type: ITEM_CLEAR_LIST_ITEMS,
	payload: {
		listId
	}
});
