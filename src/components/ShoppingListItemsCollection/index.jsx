import React from 'react';
import { connect } from 'react-redux';

import { ShoppingListItem } from '../ShoppingListItem';

const defaultShoppingListItemsCollection = ({
	listId,
	items
}) => {
	if (items.length) {
		return (
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
			</ul>
		);
	} else {
		return (
			<p className="alert alert-warning" role="alert">
				No shopping list items...
			</p>
		);
	}
};

const mapStateToProps = (store, props) => ({
	items: store.items.items[props.listId]
});

export const ShoppingListItemsCollection = connect(mapStateToProps)(defaultShoppingListItemsCollection);
