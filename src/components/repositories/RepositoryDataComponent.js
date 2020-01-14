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
		profileData,
		searchValue,
		repositoryLanguage,
		repositoryType
	} = props;
	const renderRepositories = () => {
		const {
			key,
			value
		} = repositoryType;

		const filterByTypeResults = repositoryData.filter(
			(eachRepoData) => key ? eachRepoData[key] === value || eachRepoData[key]
				: eachRepoData
		);
		const filterBylanguage = filterByTypeResults.filter((
			eachRepoData => repositoryLanguage == "All" ?
				eachRepoData
				: eachRepoData.language === repositoryLanguage
		));

		return filterBylanguage.filter(
			eachRepoData => {
				const { name } = eachRepoData;
				const repoNameInLowerCase = eachRepoData.name.toLowerCase();
				const searchValueInLowerCase = searchValue.toLowerCase();
				return repoNameInLowerCase.includes(searchValueInLowerCase)
			}
		);
	}

	if (!repositoryData || !repositoryData.length)
		return (
			<div className="no-results-text">No repositories found</div>
		);
	return (
		<div className="repository-details-wrapper">
			<TabNavigator
				profileData={profileData}
				repositoryData={repositoryData}
			/>
			<SearchAndFilterTab {...props} />
			{
				renderRepositories().length ?
					renderRepositories().map(
						(eachRepoData, index) =>
							<RepositoryTile
								key={index + eachRepoData.id}
								repoDetails={eachRepoData}
							/>
					)
					: <div className="no-results-text">
							{`No matches found${searchValue ? ` for ${searchValue}` : ''}`}
						</div>
			}
		</div>
	)
};