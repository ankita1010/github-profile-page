import React from 'react';

export const SearchAndFilterTab = (props) => {
	const {
		searchValue,
		repositoryType,
		repositoryLanguage
	} = props;
	
	return (
		<div className="search-and-filter-block">
			<input className="repo-search"/>
			<div>
				Type: 
			</div>
		</div>
	)
}