import React, { useEffect } from "react";
import { TopNav, Main, Loader } from "./components";
import "./App.scss";

export const AppComponent = props => {

	const {
		isLoading,
		getProfileAndRepoData,
		currentFilterVisible,
		updateVisibleFilterType
	} = props;

	useEffect(() => {
		getProfileAndRepoData();
		document.addEventListener('click', handleHideFilter)
	}, []);
	const handleHideFilter = () => {
		if (currentFilterVisible)
			updateVisibleFilterType(null);
	}
	return [
		<TopNav key="top-nav" />,
		<div
			className="app-block"
			key="app-block"
			onClick={handleHideFilter}
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
