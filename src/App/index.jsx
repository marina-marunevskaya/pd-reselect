import React from 'react';

import { ShoppingListForm } from '../components/ShoppingListForm';
import { ShoppingListsCollection } from '../components/ShoppingListsCollection';

export const App = () => (
	<div className="container my-5">
		<div className="row">
			<div className="col-12 col-lg-4">
				<ShoppingListForm />
			</div>
			<div className="col-12 col-lg-8">
				<ShoppingListsCollection />
			</div>
		</div>
	</div>
);
