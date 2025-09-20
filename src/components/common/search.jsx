import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./style/search.css";

const Search = ({ searchData, onClose }) => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const searchRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		if (query.trim().length > 1) {
			const filteredResults = searchData.filter(item =>
				item.title.toLowerCase().includes(query.toLowerCase()) ||
				item.description.toLowerCase().includes(query.toLowerCase()) ||
				(item.keywords && item.keywords.some(keyword =>
					keyword.toLowerCase().includes(query.toLowerCase())
				)) ||
				(item.content && item.content.toLowerCase().includes(query.toLowerCase()))
			);
			setResults(filteredResults);
			setIsOpen(true);
		} else {
			setResults([]);
			setIsOpen(false);
		}
	}, [query, searchData]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (searchRef.current && !searchRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleClose = () => {
		setQuery("");
		setResults([]);
		setIsOpen(false);
		if (onClose) onClose();
	};

	const handleResultClick = () => {
		setIsOpen(false);
		setQuery("");
	};

	const highlightText = (text, query) => {
		if (!query.trim()) return text;

		const regex = new RegExp(`(${query.trim()})`, 'gi');
		const parts = text.split(regex);

		return parts.map((part, index) =>
			regex.test(part) ? (
				<span key={index} className="search-highlight">{part}</span>
			) : (
				part
			)
		);
	};

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<div className="search-overlay" ref={searchRef}>
			<div className="search-container">
				<div className="search-input-container">
					<FontAwesomeIcon icon={faSearch} className="search-icon" />
					<input
						ref={inputRef}
						type="text"
						placeholder="Search articles, projects, pages..."
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						className="search-input"
					/>
					<button onClick={handleClose} className="search-close">
						<FontAwesomeIcon icon={faTimes} />
					</button>
				</div>

				{isOpen && (
					<div className="search-results">
						{results.length > 0 ? (
							<>
								<div className="search-results-header">
									{results.length} result{results.length !== 1 ? 's' : ''} found
								</div>
								{results.map((result, index) => (
									<div key={index} className="search-result-item">
										{result.type === 'article' ? (
											<Link
												to={result.link}
												onClick={handleResultClick}
												className="search-result-link"
											>
												<div className="search-result-type">Article</div>
												<div className="search-result-title">
													{highlightText(result.title, query)}
												</div>
												<div className="search-result-description">
													{highlightText(result.description, query)}
												</div>
												{result.date && (
													<div className="search-result-date">{result.date}</div>
												)}
											</Link>
										) : result.type === 'project' ? (
											<a
												href={result.link}
												target="_blank"
												rel="noopener noreferrer"
												onClick={handleResultClick}
												className="search-result-link"
											>
												<div className="search-result-type">Project</div>
												<div className="search-result-title">
													{highlightText(result.title, query)}
												</div>
												<div className="search-result-description">
													{highlightText(result.description, query)}
												</div>
											</a>
										) : (
											<Link
												to={result.link}
												onClick={handleResultClick}
												className="search-result-link"
											>
												<div className="search-result-type">Page</div>
												<div className="search-result-title">
													{highlightText(result.title, query)}
												</div>
												<div className="search-result-description">
													{highlightText(result.description, query)}
												</div>
											</Link>
										)}
									</div>
								))}
							</>
						) : query.trim().length > 1 ? (
							<div className="search-no-results">
								<div className="search-no-results-text">
									No results found for "{query}"
								</div>
								<div className="search-no-results-suggestion">
									Try searching for articles, projects, or page content
								</div>
							</div>
						) : null}
					</div>
				)}
			</div>
		</div>
	);
};

export default Search;