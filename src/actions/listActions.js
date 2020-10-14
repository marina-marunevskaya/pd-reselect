export const LIST_ADD = 'LIST_ADD';
export const LIST_UPDATE = 'LIST_UPDATE';
export const LIST_DELETE = 'LIST_DELETE';

export const addList = (
	id,
	name
) => ({
	type: LIST_ADD,
	payload: {
		id,
		name
	}
});

export const updateList = (
	id,
	name
) => ({
	type: LIST_UPDATE,
	payload: {
		id,
		name
	}
});

export const deleteList = (
	id
) => ({
	type: LIST_DELETE,
	payload: {
		id
	}
});
