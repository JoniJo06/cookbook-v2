/** @format */

import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Recipes from './Recipes';

const NavigationDefinition = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='recipes/:id' element={<Recipes />} />
			</Routes>
		</div>
	);
};

export default NavigationDefinition;
