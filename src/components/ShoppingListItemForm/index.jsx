import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../actions/itemActions';

const pricePattern = /^\d+(?:\.\d+){0,1}$/;

const defaultShoppingListItemForm = ({
	addItem,
	listId
}) => {
	const [hasNameError, setNameError] = useState(false);
	const [hasPriceError, setPriceError] = useState(false);

	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);

	const nameInputClass = hasNameError ? 'form-control is-invalid' : 'form-control';
	const priceInputClass = hasPriceError ? 'form-control is-invalid' : 'form-control';

	const onChange = useCallback(
		event => {
			if (event.target.name === 'name') {
				setName(event.target.value);
				setNameError(false);
			} else {
				setPrice(event.target.value);
				setPriceError(false);
			}
		}
	);

	const onSubmit = useCallback(
		event => {
			event.preventDefault();

			if (name && pricePattern.test(price)) {
				const id = `${listId}-${Date.now()}-${Math.round(Math.random() * 100)}`;
				addItem(id, listId, name, parseFloat(price));
				setName('');
				setPrice(0);
				setNameError(false);
				setPriceError(false);
			} else {
				if (!name) {
					setNameError(true);
				}

				if (!pricePattern.test(price)) {
					setPriceError(true);
				}
			}
		},
		[listId, name, price, addItem]
	);

	return (
		<div className="row my-2">
			<div className="col-md-8 mx-auto">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label htmlFor={`itemNameInput-${listId}`}>
							Name
						</label>
						<input
							className={nameInputClass}
							id={`itemNameInput-${listId}`}
							name="name"
							type="text"
							onChange={onChange}
							value={name}
						/>
						<p className="invalid-feedback">
							Enter an item name
						</p>
					</div>
					<div className="form-group">
						<label htmlFor={`itemPriceInput-${listId}`}>
							Price
						</label>
						<input
							className={priceInputClass}
							id={`itemPriceInput-${listId}`}
							name="price"
							type="text"
							onChange={onChange}
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
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	addItem
};

export const ShoppingListItemForm = connect(null, mapDispatchToProps)(defaultShoppingListItemForm);
