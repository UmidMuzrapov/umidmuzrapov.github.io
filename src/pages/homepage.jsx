import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
	faMedium
} from "@fortawesome/free-brands-svg-icons";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	const currentSEO = SEO.find((item) => item.page === "home");
	const parseDescriptionWithLinks = (text) => {
		const parts = text.split(/(\[.*?\]\(.*?\))/g);
		
		return parts.map((part, index) => {
			const match = part.match(/\[(.*?)\]\((.*?)\)/);
			if (match) {
				const [, linkText, linkUrl] = match;
				return (
					<a 
						key={index}
						href={linkUrl} 
						target="_blank" 
						rel="noopener noreferrer"
						className="description-link"
					>
						{linkText}
					</a>
				);
			}
			return part;
		});
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<div className="content-wrapper">

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

									<div className="subtitle homepage-subtitle">
										{INFO.homepage.description.split('\n\n').map((paragraph, index) => (
											<p key={index} className="homepage-paragraph">
												{parseDescriptionWithLinks(paragraph)}
											</p>
										))}
									</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="me.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a
								href={INFO.socials.github}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faGithub}
									className="homepage-social-icon"
								/>
							</a>

							<a
								href={INFO.socials.linkedin}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={INFO.socials.medium}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMedium}
									className="homepage-social-icon"
								/>
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-projects">
							<AllProjects />
						</div>

						<div className="homepage-after-title">
							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
