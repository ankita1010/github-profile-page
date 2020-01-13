import {RepositoryDataComponent} from './RepositoryDataComponent';
import {connect} from 'react-redux';

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
	{}
)(RepositoryDataComponent);

export {RepositoryData};