import { AppComponent } from "./AppComponent";
import { connect } from "react-redux";
import {
	getProfileAndRepoData,
	updateVisibleFilterType
} from "./actions";
import "./App.scss";


const mapStateToProps = state => {
	const { common, repositoryActions } = state;
	return {
		isLoading: common.isLoading,
		currentFilterVisible: repositoryActions.currentFilterVisible
	};
};

const App = connect(mapStateToProps, {
	getProfileAndRepoData,
	updateVisibleFilterType
})(AppComponent);

export { App };
