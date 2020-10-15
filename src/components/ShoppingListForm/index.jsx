import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import { initItemList } from '../../actions/itemActions';
import { addList } from '../../actions/listActions';

const generateListID = () => `${Date.now()}-${Math.round(Math.random() * 100)}`;

const Form = ({
	addList,
	initItemList
}) => {
	const [hasError, setError] = useState(false);
	const [name, setName] = useState('');

	const nameInputClass = hasError ? 'form-control is-invalid' : 'form-control';

	const onChange = useCallback(
		event => {
			setName(event.target.value);
			setError(false);
		},
		[]
	);

	const onSubmit = useCallback(
		event => {
			event.preventDefault();

			if (name) {
				const id = generateListID();
				addList({
					id,
					name
				});
				initItemList(id);
				setName('');
				setError(false);
			} else {
				setError(true);
			}
		},
		[name, addList, initItemList]
	);

	return (
		<form className="sticky-top py-5" onSubmit={onSubmit}>
			<div className="form-group">
				<label htmlFor="nameInput">
					Name
				</label>
				<input
					className={nameInputClass}
					id="nameInput"
					onChange={onChange}
					type="text"
					value={name}
				/>
				<p className="invalid-feedback">
					Enter a valid name
				</p>
			</div>

			<button className="btn btn-primary" type="submit">
				Add
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	addList,
	initItemList
};

export const ShoppingListForm = connect(null, mapDispatchToProps)(Form);
