import React from 'react';
import { filterTypes } from '../../constants';

export const SearchAndFilterTab = (props) => {
	const {
		searchValue,
		repositoryType,
		repositoryLanguage,
		currentFilterVisible,
		repositoryData
	} = props;
	const {
		handleRepositorySearch,
		handleFilterByType,
		handleFilterByLanguage,
		updateVisibleFilterType
	} = props;
	const handleSearch = (event) => {
		handleRepositorySearch(event.target.value);
	};
	const languages = repositoryData.reduce((acc, currentValue) => (
		acc.includes(currentValue.language) ?
			acc
			: [...acc, currentValue.language]
	), ["All"])
	return (
		<div className="search-and-filter-block">
			<input
				className="repo-search"
				placeholder="Find a repository"
				value={searchValue}
				onChange={handleSearch}
			/>
			<div className="filter-block">
				<button onClick={() => updateVisibleFilterType("type")}>
					Type: {repositoryType.label}
					<i className="fa fa-sort-down" />
				</button>
				{
					currentFilterVisible === "type" ?
						<div className="filter-types-wrapper">
							{
								filterTypes.map(
									(eachFilterType) => {
										const {
											label,
											key,
											value
										} = eachFilterType;
										return (
											<div
												onClick={() => handleFilterByType(eachFilterType)}
												key={label + key}
												className="filter-types"
											>
												{label}
											</div>
										)
									})
							}
						</div>
						: null
				}
			</div>
			<div className="filter-block">
				<button onClick={() => updateVisibleFilterType("language")}>
					Language: {repositoryLanguage}
					<i className="fa fa-sort-down" />
				</button>

				{
					currentFilterVisible === "language" ?
						<div className="filter-types-wrapper">
							{
								languages.map(
									(eachLanguage, index) => (
										<div
											onClick={() => handleFilterByLanguage(eachLanguage)}
											key={eachLanguage + index}
											className="filter-types"
										>
											{eachLanguage}
										</div>
									)
								)
							}
						</div>
						: null
				}
			</div>
			<button>
				New
			</button>
		</div>
	)
}