import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ShoppingList } from '../ShoppingList';

const Collection = ({
	items
}) => {
	const content = items.length
		? (
			<ul className="list-group">
				{
					items.map(
						({ id, name }) => <ShoppingList key={id} id={id} name={name} />
					)
				}
			</ul>
		)
		: (
			<p className="alert alert-warning" role="alert">
				No shopping lists...
			</p>
		);

	return (
		<div className="py-5">
			{
				content
			}
		</div>
	);
};

const getShoppingLists = store => store.lists.items;

const mapStateToProps = createStructuredSelector({
	items: getShoppingLists
});

export const ShoppingListsCollection = connect(mapStateToProps)(Collection);
