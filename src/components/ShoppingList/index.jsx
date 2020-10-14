import React from 'react';

export const ShoppingList = ({
	id,
	name
}) => (
	<li className="list-group-item">
		{name}
	</li>
);
