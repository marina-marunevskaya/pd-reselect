import React from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import { ShoppingListItem } from '../ShoppingListItem';

const Collection = ({
	listId,
	items,
	totalPrice
}) => {
	const content = items.length
		? (
			<ul className="list-group">
				{
					items.map(
						({ id, name, price }) => <ShoppingListItem
							key={id}
							name={name}
							price={price}
						/>
					)
				}
				<li
					className="list-group-item list-group-item-info"
					key={`totalPrice-${listId}`}
				>
					<div className="row">
						<div className="col font-weight-bold text-break">
							Total price
						</div>
						<div className="col text-md-right text-sm-left text-break">
							{totalPrice}
						</div>
					</div>
				</li>
			</ul>
		)
		: (
			<p className="alert alert-warning text-break" role="alert">
				No shopping list items...
			</p>
		);

	return (
		<div className="py-2">
			{content}
		</div>
	);
};

const getShoppingListItems = (store, props) => store.items.items[props.listId];
const createTotalPriceSelector = () => createSelector(
	getShoppingListItems,
	items => items.reduce((total, item) => total + item.price, 0)
);

const mapStateToProps = () => {
	const selectTotalPrice = createTotalPriceSelector();

	return createStructuredSelector({
		items: getShoppingListItems,
		totalPrice: selectTotalPrice
	})
};

export const ShoppingListItemsCollection = connect(mapStateToProps)(Collection);
