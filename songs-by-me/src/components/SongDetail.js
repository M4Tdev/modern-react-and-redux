import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {

	if (!props.selectedSong) {
		return <div>
			<h3>
				Select song
			</h3>
		</div>
	}

	return (
		<div>
			<h3>Song Details:</h3><br />
			Title: {props.selectedSong.title}<br />
			Author: {props.selectedSong.author}<br />
			Duration: {props.selectedSong.duration}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		selectedSong: state.selectedSong,
	};
};

export default connect(mapStateToProps)(SongDetail);