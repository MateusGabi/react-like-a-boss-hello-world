import React from 'react';
import actions from './actions';
import { connect } from 'react-redux';

const Search = ({ onType }) => (
	<div>
		<input type="text" onChange={e => onType(e.target.value)} />
		<input type="checkbox" /> Only in-stock
	</div>
);

const mapDispatchToProps = dispatch => {
	return {
		onType: string => {
			dispatch(actions.search(string));
		}
	};
};

export default connect(
	undefined,
	mapDispatchToProps
)(Search);
