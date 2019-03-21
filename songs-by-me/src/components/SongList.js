import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

	renderSongsList = () => {
		return this.props.songs.map((song) => {
			return (
				<div key={song.title}>
					{song.title}
					<button type="button" onClick={() => this.props.selectSong(song)}>Select</button>
				</div>
			);
		});
	};

	render() {
		return (
			<div>
				{this.renderSongsList()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		songs: state.songs,
	};
};

export default connect(mapStateToProps, { selectSong })(SongList);