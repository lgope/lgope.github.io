import React from "react";
import Card from "../common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faLocationDot,
	faGraduationCap,
	faBook,
} from "@fortawesome/free-solid-svg-icons";
import { educations, trainingAndCourses } from "../../data/education";
import { truncate } from "../../utils";
import { Link } from "react-router-dom";

const Education = () => {
	return (
		<React.Fragment>
			<Card
				icon={faGraduationCap}
				title="Education"
				className="education-card"
				body={
					<div className="education-details">
						{React.Children.toArray(
							educations.map((data) => (
								<div className="row">
									<div className="column">
										<div className="company-logo">
											<img
												src={data.university_logo}
												alt={data.university_name}
												className="work-image"
											/>
										</div>

										<div className="company-info">
											<div className="work-title">
												{data.university_name}
											</div>

											<div className="work-subtitle">
												{data.study_subject}
											</div>

											<div className="work-subtitle">
												{data.result}
											</div>
										</div>
									</div>

									<div className="work-info">
										<div className="work-location">
											<FontAwesomeIcon
												style={{
													fontSize: "12px",
													color: "8F0D0D",
													paddingRight: "9px",
												}}
												icon={faLocationDot}
											/>
											{data.university_location}
										</div>

										<div className="work-duration">
											<FontAwesomeIcon
												style={{
													fontSize: "12px",
													color: "8F0D0D",
													paddingRight: "9px",
												}}
												icon={faCalendarDays}
											/>
											{data.study_duration}
										</div>
									</div>
								</div>
							))
						)}
					</div>
				}
			/>

			<Card
				icon={faBook}
				title="Training And Courses"
				className="education-card training-courses-section"
				body={
					<div className="education-details">
						{React.Children.toArray(
							trainingAndCourses.map((data) => (
								<div className="row">
									<div className="column">
										<div className="company-logo">
											<img
												src={data.institution_logo}
												alt={data.institution_name}
												className="work-image"
											/>
										</div>

										<div className="company-info">
											<div className="work-title">
												{data.institution_name}
											</div>

											<div className="work-subtitle">
												<Link
													className="article_more_profile_details"
													to={data.show_credential}
													target="_blank"
												>
													{truncate(
														data.study_subject,
														34
													)}
												</Link>
											</div>
										</div>
									</div>

									<div className="work-info">
										<div className="work-location">
											<FontAwesomeIcon
												style={{
													fontSize: "12px",
													color: "8F0D0D",
													paddingRight: "9px",
												}}
												icon={faLocationDot}
											/>
											{data.institution_location}
										</div>

										<div className="work-duration">
											<FontAwesomeIcon
												style={{
													fontSize: "12px",
													color: "8F0D0D",
													paddingRight: "9px",
												}}
												icon={faCalendarDays}
											/>
											{data.study_duration}
										</div>
									</div>
								</div>
							))
						)}
					</div>
				}
			/>
		</React.Fragment>
	);
};

export default Education;
