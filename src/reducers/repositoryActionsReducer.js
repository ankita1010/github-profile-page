import {
	HANDLE_FILTER_BY_LANGUAGE,
	HANDLE_FILTER_BY_TYPE,
	HANDLE_REPOSITORY_SEARCH
} from '../constants';

const initialState = {
	searchValue: '',
	repositoryType: null,
	repositoryLanguage: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case HANDLE_FILTER_BY_TYPE: {
			const { repositoryType } = action;
			return {
				...state,
				repositoryType
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
				repositoryLanguage
			}
		}
		default: {
			return state
		}
	}
}