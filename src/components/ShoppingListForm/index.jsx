import React, { useCallback, useMemo, useState } from 'react';
import { connect } from 'react-redux';

import { addList } from '../../actions/listActions';

const defaultShoppingListForm = ({
	addList
}) => {
	const [hasError, setError] = useState(false);
	const [name, setName] = useState('');

	const inputClass = useMemo(
		() => hasError ? 'form-control is-invalid' : 'form-control',
		[hasError]
	);

	const onChange = useCallback(
		event => {
			setName(event.target.value);

			if (event.target.value) {
				setError(false);
			}
		},
		[]
	);

	const onSubmit = useCallback(
		(event) => {
			event.preventDefault();

			if (name) {
				const id = `${Date.now()}-${Math.round(Math.random() * 100)}`;
				addList(id, name);
				setError(false);
				setName('');
			} else {
				setError(true);
			}
		},
		[name, addList]
	);

	return (
		<div className="row my-4">
			<div className="col-md-6 mx-auto">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label htmlFor="listNameInput">
							Name
						</label>
						<input
							className={inputClass}
							id="listNameInput"
							type="text"
							onChange={onChange}
							value={name}
						/>
						<p className="invalid-feedback">
							Enter a list name
						</p>
					</div>

					<button className="btn btn-primary" type="submit">
						Add
					</button>
				</form>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	addList
};

export const ShoppingListForm = connect(null, mapDispatchToProps)(defaultShoppingListForm);
