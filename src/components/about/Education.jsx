import React from 'react';
import Card from '../common/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import educations from '../../data/education';

const Education = () => {
    return (
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
										src={data.university_icon}
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
    );
};

export default Education;