import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 3ec659946d8b490bd653db64de6ad5c4c4e319c11a8bb68ce7005ba615da4835',
	}
});