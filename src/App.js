import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getProfileAndRepoData } from "./actions";
import { TopNav, Main, Loader } from "./components";
import "./App.scss";

const AppComponent = props => {

	const { isLoading, getProfileAndRepoData } = props;

	useEffect(() => {
		getProfileAndRepoData();
	}, []);

	return [
			<TopNav key="top-nav"/>,
			<div
				className="app-block"
				key="app-block"
			>
				{isLoading ? (
					<div className="loading-indicator">
						<Loader />
					</div>
				) : (
						<Main />
					)}
			</div>
		];
};

const mapStateToProps = state => {
	const {common} = state;
	return {
		isLoading: common.isLoading
	};
};

const App = connect(mapStateToProps, {
	getProfileAndRepoData
})(AppComponent);

export { App };
