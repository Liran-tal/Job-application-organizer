import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div>
			<Link to={'/'}>
				Logo
			</Link>
			{/* <Link to={User ? '/:user' : '/login'}>
				{User ? "Login" : ""}
			</Link> */}
		</div>
	);
}

export default Navbar;
