import {ProfileComponent} from './ProfileComponent';
import {connect} from 'react-redux';

import './profile.scss';

const mapStateToProps = (state) => {
	const {common} = state;
	return({
		profileData: common.profileData
	})
};
const Profile = connect(
	mapStateToProps,
	{}
)(ProfileComponent);

export {Profile};