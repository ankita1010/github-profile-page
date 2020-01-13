import {
	HANDLE_FILTER_BY_LANGUAGE,
	HANDLE_FILTER_BY_TYPE,
	HANDLE_REPOSITORY_SEARCH,
	HANDLE_UPDATE_FILTER_TYPE
} from '../constants';

const initialState = {
	searchValue: '',
	repositoryType: {label: "All"},
	repositoryLanguage: "All",
	currentFilterVisible: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case HANDLE_FILTER_BY_TYPE: {
			const { repositoryType } = action;
			return {
				...state,
				repositoryType,
				searchValue: ''
			}
		}
		case HANDLE_REPOSITORY_SEARCH: {
			const { searchValue } = action;
			return {
				...state,
				searchValue
			}
		}
		case HANDLE_FILTER_BY_LANGUAGE: {
			const { repositoryLanguage } = action;
			return {
				...state,
				repositoryLanguage,
				searchValue: ''
			}
		}
		case HANDLE_UPDATE_FILTER_TYPE: {
			const { currentFilterVisible } = action;
			return {
				...state,
				currentFilterVisible
			}
		}
		default: {
			return state
		}
	}
}