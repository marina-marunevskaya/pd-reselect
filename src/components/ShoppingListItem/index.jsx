import React from 'react';

export const ShoppingListItem = ({
	id,
	listId,
	name,
	price
}) => (
	<li className="list-group-item">
		<div className="row">
			<div className="col font-weight-bold">
				{name}
			</div>
			<div className="col">
				{price}
			</div>
		</div>
	</li>
);
