import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="header-container">
				<nav className="md:ml-4 ml-1 md:pt-5 pt-2 text-slate-900 font-serif text-sm md:pb-8 pb-4">
				<ul className="flex space-x-4">
					<li>
					<Link to="/" className="hover:underline">home</Link>
					</li>
					<li>
					<Link to="/rules" className="hover:underline">rules</Link>
					</li>
				</ul>
				</nav>
			</div>
		</header>
	);
};
export default Header;