import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{
			title: 'High Hopes',
			author: 'Panic! At The Disco',
			duration: '4:15',
		},
		{
			title: 'Say Amen',
			author: 'Panic! At The Disco',
			duration: '3:45',
		},
		{
			title: 'I Write Sins not Tragedies',
			author: 'Panic! At The Disco',
			duration: '4:15',
		},
		{
			title: 'Perfect',
			author: 'Ed Sheeran',
			duration: '4:15',
		},
		{
			title: 'Shape Of You',
			author: 'Ed Sheeran',
			duration: '4:15',
		},
	];
};

const selectedSongReducer = (state = null, action) => {
	if (action.type === 'SELECT_SONG') {
		return action.payload;
	}

	return state;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});