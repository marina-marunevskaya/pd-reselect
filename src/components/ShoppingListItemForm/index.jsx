import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../actions/itemActions';

const pricePattern = /^\d+(?:\.\d+){0,1}$/;

const generateItemID = listId => `${listId}-${Date.now()}-${Math.round(Math.random() * 100)}`;

const Form = ({
	addItem,
	listId
}) => {
	const [hasNameError, setNameError] = useState(false);
	const [hasPriceError, setPriceError] = useState(false);

	const [name, setName] = useState('');
	const [price, setPrice] = useState('0');

	const nameInputClass = hasNameError ? 'form-control is-invalid' : 'form-control';
	const priceInputClass = hasPriceError ? 'form-control is-invalid' : 'form-control';

	const onChange = useCallback(
		event => {
			const { target: { name, value } } = event;

			if (name === 'name') {
				setName(value);
				setNameError(false);
			} else {
				setPrice(value);
				setPriceError(false);
			}
		},
		[]
	);

	const onSubmit = useCallback(
		event => {
			event.preventDefault();

			const validPrice = pricePattern.test(price)

			if (name && validPrice) {
				const id = generateItemID(listId);
				addItem({
					id,
					listId,
					name,
					price: parseFloat(price)
				});
				setName('');
				setPrice('0');
				setNameError(false);
				setPriceError(false);
			} else {
				if (!name) {
					setNameError(true);
				}

				if (!validPrice) {
					setPriceError(true);
				}
			}
		},
		[name, price, listId, addItem]
	);

	return (
		<form className="pt-2 pb-4" onSubmit={onSubmit}>
			<div className="form-group">
				<label htmlFor={`nameInput-${listId}`}>
					Name
				</label>
				<input
					className={nameInputClass}
					id={`nameInput-${listId}`}
					name="name"
					onChange={onChange}
					type="text"
					value={name}
				/>
				<p className="invalid-feedback">
					Enter a valid name
				</p>
			</div>
			<div className="form-group">
				<label htmlFor={`priceInput-${listId}`}>
					Name
				</label>
				<input
					className={priceInputClass}
					id={`priceInput-${listId}`}
					name="price"
					onChange={onChange}
					type="text"
					value={price}
				/>
				<p className="invalid-feedback">
					Enter a valid price
				</p>
			</div>

			<button className="btn btn-primary" type="submit">
				Add
			</button>
		</form>
	);
};

const mapDispatchToProps = {
	addItem
};

export const ShoppingListItemForm = connect(null, mapDispatchToProps)(Form);
