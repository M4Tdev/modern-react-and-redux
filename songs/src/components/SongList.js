import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

	renderList = () => {
		return this.props.songs.map((song) => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button type="button" className="ui button primary" onClick={() => this.props.selectSong(song)}>Select</button>
					</div>
					<div className="content">
						{song.title}
					</div>
				</div>
			);
		})
	};

	render() {
		return (
			// this.props === { songs: state.songs }

			<div className="ui divided list">{this.renderList()}</div>
		);
	}
}

const mapStateToProps = (state) => {
	// this will be passed as props
	return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);