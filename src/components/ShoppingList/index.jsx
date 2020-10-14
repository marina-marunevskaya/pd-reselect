import React from 'react';

import { ShoppingListItemForm } from '../ShoppingListItemForm';
import { ShoppingListItemsCollection } from '../ShoppingListItemsCollection';

export const ShoppingList = ({
	id,
	name
}) => (
	<li className="list-group-item">
		<span className="font-weight-bold">
			{name}
		</span>
		<ShoppingListItemForm listId={id} />
		<ShoppingListItemsCollection listId={id} />
	</li>
);
