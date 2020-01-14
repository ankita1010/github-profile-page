import React from 'react';
export const ProfileComponent = (props) => {
	const { profileData } = props;
	const {
		login,
		name,
		company,
		location,
		url,
		bio,
		avatar_url
	} = profileData || {};

	if (!login)
		return (
			<div className="no-results-text">Profile not found</div>
		);
	return (
		<div className="profile-wrapper">
			<div className="avatar">
				<img src={avatar_url} alt="github-avatar" />
			</div>
			<div className="personal-details">
				<h2>
					{name}
				</h2>
				<h3>
					{login}
				</h3>
				<button>Edit Bio</button>
			</div>
			<div className="work-details">
				{
					company ?
						<p>
							<i className="fa fa-users"/>
							{company}
						</p>
						: null
				}
				{
					location ?
						<p>
							<i className="fa fa-map-marker"/>
							{location}
						</p>
						: null
				}
			</div>
		</div>
	)
};