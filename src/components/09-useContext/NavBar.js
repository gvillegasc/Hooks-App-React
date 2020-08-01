import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				useContext
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav">
					<li>
						<NavLink
							activeClassName="active"
							exact
							className="nav-item nav-link"
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="active"
							exact
							className="nav-item nav-link"
							to="/about"
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="active"
							exact
							className="nav-item nav-link"
							to="/login"
						>
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
