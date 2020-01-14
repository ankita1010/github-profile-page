import {
	HANDLE_LOADER_VISIBILITY,
	UPDATE_PROFILE_DATA,
	UPDATE_REPO_DATA,
	HANDLE_SERVER_ERROR,
} from '../constants';
import {
	getRepositoryDetails,
	getUserDetails
} from '../constants/apiRoutes';
import { createGetRequest } from '../util';


export const getProfileAndRepoData = () => async (dispatch) => {
	try{

		const [profileData, repositoryData] = await Promise.all([
			createGetRequest(getUserDetails),
			createGetRequest(getRepositoryDetails)
		]);
		dispatch({
			type: UPDATE_PROFILE_DATA,
			profileData
		});
		dispatch({
			type: UPDATE_REPO_DATA,
			repositoryData
		})
	} catch (e) {
		dispatch({
			type: HANDLE_SERVER_ERROR
		})
	}
	dispatch({
		type: HANDLE_LOADER_VISIBILITY,
		isLoading: false
	})
};