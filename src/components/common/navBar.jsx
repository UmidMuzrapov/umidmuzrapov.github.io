import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Search from "./search";
import generateSearchData from "../../utils/searchData";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [showSearch, setShowSearch] = useState(false);

	const handleSearchOpen = () => {
		setShowSearch(true);
	};

	const handleSearchClose = () => {
		setShowSearch(false);
	};

	// Keyboard shortcut for search (Ctrl+K or Cmd+K)
	useEffect(() => {
		const handleKeyDown = (event) => {
			if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
				event.preventDefault();
				handleSearchOpen();
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, []);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
							<li className="nav-item search-nav-item">
								<button
									onClick={handleSearchOpen}
									className="search-button"
									title="Search"
								>
									<FontAwesomeIcon icon={faSearch} />
								</button>
							</li>
						</ul>
					</div>
				</nav>
			</div>

			{showSearch && (
				<Search
					searchData={generateSearchData()}
					onClose={handleSearchClose}
				/>
			)}
		</React.Fragment>
	);
};

export default NavBar;
