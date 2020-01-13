import {
	HANDLE_LOADER_VISIBILITY,
	UPDATE_PROFILE_DATA,
	UPDATE_REPO_DATA,
	HANDLE_SERVER_ERROR,
} from '../constants';

const initialState = {
	isLoading: true,
	profileData: null,
	repositoryData: null,
	serverError: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case HANDLE_LOADER_VISIBILITY: {
			const {isLoading} = action;
			return {
				...state, 
				isLoading
			}
		}
		case HANDLE_SERVER_ERROR: {
			return {
				...state,
				serverError: "Oops, something went wrong!"
			}
		}
		case UPDATE_PROFILE_DATA: {
			const {profileData} = action;
			return {
				...state,
				profileData
			};
		};
		case UPDATE_REPO_DATA: {
			const {repositoryData} = action;
			return {
				...state,
				repositoryData
			}
		}
		default: {
			return state
		}
	}
}