import React, {
	useCallback,
	useState
} from 'react';
import { TabNavigator } from './TabNavigator';
import { SearchAndFilterTab } from './SearchAndFilterTab';
import { RepositoryTile } from './RepositoryTile';

export const RepositoryDataComponent = (props) => {
	const {
		repositoryData,
		profileData
	} = props;

	const renderRepositories = () => {
		return repositoryData;
	}

	if (!repositoryData || !repositoryData.length)
		return (
			<div>No repositories found</div>
		);
	return (
		<div className="repository-details-wrapper">
			<TabNavigator
				profileData={profileData}
				repositoryData={repositoryData}
			/>
			<SearchAndFilterTab {...props}/>
			{
				renderRepositories().length ?
					renderRepositories().map(
						(eachRepoData, index) =>
							<RepositoryTile
							key={index + eachRepoData.id}
								repoDetails={eachRepoData}
							/>
					)
					: null
			}
		</div>
	)
};