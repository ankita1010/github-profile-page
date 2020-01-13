import common from './commonReducer';
import repositoryActions from './repositoryActionsReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
	common,
	repositoryActions
});
export {rootReducer};