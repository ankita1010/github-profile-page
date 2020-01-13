import React from 'react';
import {
	Profile,
	RepositoryData
} from '../../components';
export const MainComponent = () => {
	return [
		<Profile key="profile"/>,
		<RepositoryData key="repositories"/>
	]
}