import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myArticles from "../data/articles";

import "./styles/readArticle.css";

let ArticleStyle = styled.div``;

const ReadArticle = () => {
	const navigate = useNavigate();
	let { slug } = useParams();

	const article = myArticles[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	ArticleStyle = styled.div`
		${article().style}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src="../back-button.png"
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{article().date}
								</div>
							</div>

							<div className="title read-article-title">
								{article().title}
							</div>

							<div className="read-article-body">
								<ArticleStyle>
									{article().isMarkdown ? (
										<ReactMarkdown
											remarkPlugins={[remarkGfm]}
											components={{
												code({ node, inline, className, children, ...props }) {
													const match = /language-(\w+)/.exec(className || '');
													return !inline && match ? (
														<SyntaxHighlighter
															style={tomorrow}
															language={match[1]}
															PreTag="div"
															{...props}
														>
															{String(children).replace(/\n$/, '')}
														</SyntaxHighlighter>
													) : (
														<code className={className} {...props}>
															{children}
														</code>
													);
												},
												img({ node, ...props }) {
													return (
														<img
															{...props}
															style={{
																maxWidth: '100%',
																height: 'auto',
																display: 'block',
																margin: '20px auto'
															}}
															alt={props.alt || ''}
														/>
													);
												}
											}}
										>
											{article().body}
										</ReactMarkdown>
									) : (
										article().body
									)}
								</ArticleStyle>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
