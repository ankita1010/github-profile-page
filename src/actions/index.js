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

const mockUser = {
  "login": "ankita1010",
  "id": 45850634,
  "node_id": "MDQ6VXNlcjQ1ODUwNjM0",
  "avatar_url": "https://avatars2.githubusercontent.com/u/45850634?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ankita1010",
  "html_url": "https://github.com/ankita1010",
  "followers_url": "https://api.github.com/users/ankita1010/followers",
  "following_url": "https://api.github.com/users/ankita1010/following{/other_user}",
  "gists_url": "https://api.github.com/users/ankita1010/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ankita1010/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ankita1010/subscriptions",
  "organizations_url": "https://api.github.com/users/ankita1010/orgs",
  "repos_url": "https://api.github.com/users/ankita1010/repos",
  "events_url": "https://api.github.com/users/ankita1010/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ankita1010/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ankita Chakraborty",
  "company": "Wipro",
  "blog": "",
  "location": "Chennai",
  "email": null,
  "hireable": null,
  "bio": "I am cool",
  "public_repos": 7,
  "public_gists": 0,
  "followers": 3,
  "following": 5,
  "created_at": "2018-12-13T13:12:45Z",
  "updated_at": "2019-12-26T06:42:56Z"
}
import { createGetRequest } from '../util';
import {repodata as repositoryData} from './repodata';
export const getProfileAndRepoData = () => async (dispatch) => {
	try{

		// const [profileData, repositoryData] = await Promise.all([
		// 	createGetRequest(getRepositoryDetails),
		// 	createGetRequest(getUserDetails)
		// ]);
		dispatch({
			type: UPDATE_PROFILE_DATA,
			profileData: mockUser
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