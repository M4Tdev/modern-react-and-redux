import axios from 'axios';

const KEY = 'AIzaSyBRv8QE90o4fX7w26mncY8SivMft9ePwqo';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	}
});