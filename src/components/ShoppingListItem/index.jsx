import React from 'react';

export const ShoppingListItem = ({
	id,
	listId,
	name,
	price
}) => (
	<li className="list-group-item">
		<div className="row">
			<div className="col font-weight-bold text-break">
				{name}
			</div>
			<div className="col text-md-right text-sm-left text-break">
				{price}
			</div>
		</div>
	</li>
);
