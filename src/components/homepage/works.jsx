import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./aws.png"
								alt="aws"
								className="work-image"
							/>
							<div className="work-title">AWS</div>
							<div className="work-subtitle">
								Software Dev Engineer
							</div>
							<div className="work-duration">
								June 2025 - Present
							</div>
						</div>
						<div className="work">
							<img
								src="./aws.png"
								alt="aws"
								className="work-image"
							/>
							<div className="work-title">AWS</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">
								May 2024 - September 2024
							</div>
						</div>
						<div className="work">
							<img
								src="./uofa.png"
								alt="uofa"
								className="work-image"
							/>
							<div className="work-title">
								University of Arizona
							</div>
							<div className="work-subtitle">
								Student Software Developer
							</div>
							<div className="work-duration">
								August 2022 - May 2024
							</div>
						</div>
						<div className="work">
							<img
								src="./aws.png"
								alt="aws"
								className="work-image"
							/>
							<div className="work-title">AWS</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">
								May 2023 - August 2023
							</div>
						</div>
						<div className="work">
							<img
								src="./uofa.png"
								alt="uofa"
								className="work-image"
							/>
							<div className="work-title">TechCore</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">
								June 2022 - August 2022
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
