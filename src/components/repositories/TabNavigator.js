import React from 'react';

export const TabNavigator = (props) => {
	const {
		repositoryData,
		profileData
	} = props;
	const {
		followers,
		following,
	} = profileData;
	const totalStars = repositoryData.reduce(
		(accumulatedValue, currentRepo) =>
			(accumulatedValue + currentRepo.stargazers_count)
		, 0
	);
	const tabNavigatorOptions = [
		{
			label: "Overview",
			hideCount: true
		},
		{
			label: "Repositories",
			count: repositoryData.length,
			isCurrent: true
		},
		{
			label: 'Stars',
			count: totalStars
		},
		{
			label: 'Followers',
			count: followers
		},
		{
			label: 'Followings',
			count: following
		}
	];

	return (
		<nav className="tab-navigator">
			{
				tabNavigatorOptions.map(
					(eachNavigatorOption, index) => {
						const {
							label,
							hideCount,
							isCurrent,
							count
						} = eachNavigatorOption;

						return (
							<button
								className={`${isCurrent ? 'current-tab' : ''}`}
								key={label + index}
							>
								<span className="btn-label">
									{label}
								</span>
								{
									!hideCount ?
										<span className="btn-badge">
											{count}
										</span>
										: null
								}

							</button>
						)
					})
			}
		</nav>
	)
}