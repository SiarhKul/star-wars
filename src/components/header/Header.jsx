import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Header = () => {
	const menuItems = [
		"People",
		"Planets",
		"Starships",
		"Films",
		"Vehicles",
		"Species",
	];

	return (
		<header className="header">
			<div className="logo"> Star Wars</div>
			<nav className="nav">
				<ul className="nav-list">
					<NavLink to="/" className="nav-list__link">
						<FaHome />
					</NavLink>
					{menuItems.map(item => {
						return (
							<li key={item} className="nav-list__item">
								<NavLink
									className="nav-list__link"
									activeClassName="selected"
									to={item.toLowerCase()}
									exact
								>
									{item}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};
