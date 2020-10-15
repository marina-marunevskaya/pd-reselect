export const createReducer = (initialState, reduxerMap) => (state = initialState, { type, payload }) => {
	const reducer = reduxerMap[type];

	return reducer
		? reducer(state, payload)
		: state;
};
