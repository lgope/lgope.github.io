import React from "react";
import {
	faBriefcase,
	faCalendar,
	faCalendarDays,
	faFileLines,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";
import employmentData from "../../data/employment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						{employmentData.map((data, index) => (
							<div class="row" index={index.toString()}>
								<div className="column">
									<div className="company-logo">
										<img
											src={data.company_icon}
											alt={data.company_name}
											className="work-image"
										/>
									</div>

									<div className="company-info">
										<div className="work-title">
											{data.company_name}
										</div>

										<div className="work-subtitle">
											{data.work_position}
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
										{data.company_location}
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
										{data.work_duration}
									</div>
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
