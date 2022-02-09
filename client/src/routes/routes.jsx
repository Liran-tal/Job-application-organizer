import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home.page';
// import User from './pages/user';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			{/* <Route path="/user" element={<User />} /> */}
		</Routes>
	);
}

export default AppRoutes;