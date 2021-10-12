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
					<li className="nav-list__item">
						<NavLink
							className="nav-list__link"
							activeClassName="selected"
							exact
							to="/"
						>
							{/* &#127968; */}
							<FaHome />
						</NavLink>
					</li>

					{menuItems.map(item => (
							<li key={item} className="nav-list__item">
								<NavLink
									activeClassName="selected"
									className="nav-list__link"
									exact
									to={item.toLowerCase()}
								>
									{item}
								</NavLink>
							</li>
						))}
				</ul>
			</nav>
		</header>
	);
};
