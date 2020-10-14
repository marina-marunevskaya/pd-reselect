import React from 'react';

import { ShoppingListItemsCollection } from '../ShoppingListItemsCollection';

export const ShoppingList = ({
	id,
	name
}) => (
	<li className="list-group-item">
		<span className="font-weight-bold">
			{name}
		</span>
		<ShoppingListItemsCollection listId={id} />
	</li>
);
