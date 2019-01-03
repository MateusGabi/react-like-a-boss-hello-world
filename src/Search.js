import React from 'react';
import actions from './actions';
import { connect } from 'react-redux';

const Search = ({ onType, onCheck }) => (
	<div>
		<input type="text" onChange={e => onType(e.target.value)} />
		<input type="checkbox" onChange={e => onCheck(e.target.checked)} /> Only
		in-stock
	</div>
);

const mapDispatchToProps = dispatch => {
	return {
		onType: string => {
			dispatch(actions.search(string));
		},
		onCheck: bool => {
			dispatch(actions.inStock(bool));
		}
	};
};

export default connect(
	undefined,
	mapDispatchToProps
)(Search);
