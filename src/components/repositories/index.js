import {RepositoryDataComponent} from './RepositoryDataComponent';
import {connect} from 'react-redux';
import {
	handleRepositorySearch,
	handleFilterByType,
	handleFilterByLanguage,
	updateVisibleFilterType
} from '../../actions';

import './repositories.scss';

const mapStateToProps = (state) => {
	const {common, repositoryActions} = state;
	return({
		...common,
		...repositoryActions
	})
};
const RepositoryData = connect(
	mapStateToProps,
	{
		handleRepositorySearch,
		handleFilterByType,
		handleFilterByLanguage,
		updateVisibleFilterType
	}
)(RepositoryDataComponent);

export {RepositoryData};