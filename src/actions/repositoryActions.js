import {
	HANDLE_FILTER_BY_LANGUAGE,
	HANDLE_FILTER_BY_TYPE,
	HANDLE_REPOSITORY_SEARCH,
	HANDLE_UPDATE_FILTER_TYPE
} from '../constants';

export const handleRepositorySearch = (searchValue) => async (dispatch) => {
	dispatch({
		type: HANDLE_REPOSITORY_SEARCH,
		searchValue
	})
};
export const handleFilterByType = (repositoryType) => async (dispatch) => {
	dispatch({
		type: HANDLE_FILTER_BY_TYPE,
		repositoryType
	})
};
export const handleFilterByLanguage = (repositoryLanguage) => async (dispatch) => {
	dispatch({
		type: HANDLE_FILTER_BY_LANGUAGE,
		repositoryLanguage
	})
};
export const updateVisibleFilterType = (currentFilterVisible) => async (dispatch) => {
	dispatch({
		type: HANDLE_UPDATE_FILTER_TYPE,
		currentFilterVisible
	})
};