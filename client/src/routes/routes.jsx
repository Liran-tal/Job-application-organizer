import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home.page';
import TipsPage from '../pages/tips.page';
import User from '../pages/user.page';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/user" element={<User />} />
			<Route path="/tips&tricks" element={<TipsPage />} />
		</Routes>
	);
}

export default AppRoutes;