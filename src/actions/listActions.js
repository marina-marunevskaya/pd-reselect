import { createFullActionType } from '../utils/createFullActionType';

const NAMESPACE = 'LIST';

const createListFullActionType = createFullActionType(NAMESPACE);

export const LIST_ADD = createListFullActionType('LIST_ADD');

export const addList = (
	item
) => ({
	type: LIST_ADD,
	payload: item
});
