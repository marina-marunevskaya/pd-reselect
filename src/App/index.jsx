import React from 'react';

import { ShoppingListForm } from '../components/ShoppingListForm';
import { ShoppingListsCollection } from '../components/ShoppingListsCollection';

export const App = () => (
	<div className="container mt-5">
		<ShoppingListForm />
		<ShoppingListsCollection />
	</div>
);
