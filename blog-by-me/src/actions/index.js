import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostsAndUsers = () => {
	return async (dispatch, getState) => {
		await dispatch(fetchPosts());

		_.chain(getState().posts)
			.map('userId')
			.uniq()
			.forEach(id => dispatch(fetchUser(id)))
			.value();
	};
};

export const fetchPosts = () => {
	return async (dispatch, getState) => {
		const response = await jsonPlaceholder.get('/posts');

		dispatch({
			type: 'FETCH_POSTS',
			payload: response.data,
		});
	}
};

export const fetchUser = (id) => {
	return async (dispatch, getState) => {
		const response = await jsonPlaceholder.get(`/users/${id}`);

		dispatch({
			type: 'FETCH_USER',
			payload: response.data,
		});
	};
};