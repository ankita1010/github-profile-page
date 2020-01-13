import {MainComponent} from './MainComponent';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
	const {common} = state;
	return({
		serverError: common.serverError
	})
};
const Main = connect(
	mapStateToProps,
	{}
)(MainComponent);

export {Main};
