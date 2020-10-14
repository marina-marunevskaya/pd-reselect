import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { ShoppingListItem } from '../ShoppingListItem';

const defaultShoppingListItemsCollection = ({
	listId,
	items,
	totalPrice
}) => {
	if (items.length) {
		return (
			<>
				<ul className="list-group">
					{
						items.map(
							({ id, name, price }) => <ShoppingListItem
								id={id}
								key={id}
								listId={listId}
								name={name}
								price={price}
							/>
						)
					}
					<li key={`total-${listId}`} className="list-group-item list-group-item-info">
						<div className="row">
							<div className="col font-weight-bold">
								Total price
							</div>
							<div className="col text-md-right text-sm-left">
								{totalPrice}
							</div>
						</div>
					</li>
				</ul>
			</>
		);
	} else {
		return (
			<p className="alert alert-warning" role="alert">
				No shopping list items...
			</p>
		);
	}
};

const getListItems = (store, props) => store.items.items[props.listId];
const generateCalculateTotalPrice = () => {
	return createSelector(
		getListItems,
		items => items.reduce((total, item) => total + item.price, 0)
	);
};

const generateMapStateToProps = () => {
	const calculateTotalPrice = generateCalculateTotalPrice();
	const mapStateToProps = (store, props) => ({
		items: getListItems(store, props),
		totalPrice: calculateTotalPrice(store, props)
	});

	return mapStateToProps;
};

export const ShoppingListItemsCollection = connect(generateMapStateToProps)(defaultShoppingListItemsCollection);
