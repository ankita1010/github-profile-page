import React from 'react';
import { bottomRepoDetailsConfig } from '../../constants';
import * as UTIL from '../../util';

export const RepositoryTile = (props) => {
	const { repoDetails } = props;
	const { name, description } = repoDetails;
	return (
		<div className="repo-tile">
			<div className="repo-details">
				<h2 className="repo-name">
					{name}
				</h2>
				<h4 className="repo-desc">
					{description}
				</h4>
				<div className="bottom-details">
					{
						bottomRepoDetailsConfig.map(
							(eachDetailConfig) => {
								const {
									key,
									icon,
									formatter
								} = eachDetailConfig;
								const value = repoDetails[key];
								const formatterFunc = UTIL[formatter];
								if (value)
									return (
										<p key={key}>
											<i className={icon} />
											<span>
												{
													formatter && formatterFunc ?
														formatterFunc(value) || ''
														: value || ''
												}
											</span>
										</p>
									)
								return null
							}
						)
					}
				</div>
			</div>
			<button className="star-btn">
				<i className="fa fa-star" />
				Star
			</button>
		</div>
	)
}