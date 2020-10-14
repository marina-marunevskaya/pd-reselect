import React from 'react';
import { connect } from 'react-redux';

import { ShoppingList } from '../ShoppingList';

const defaultShoppingListsCollection = ({
	items
}) => {
	if (items.length) {
		return (
			<ul className="list-group">
				{
					items.map(
						({ id, name }) => <ShoppingList id={id} key={id} name={name} />
					)
				}
			</ul>
		);
	} else {
		return (
			<p className="alert alert-warning" role="alert">
				No shopping lists...
			</p>
		);
	}
};

const mapStateToProps = store => ({
	items: store.lists.items
});

export const ShoppingListsCollection = connect(mapStateToProps)(defaultShoppingListsCollection);
