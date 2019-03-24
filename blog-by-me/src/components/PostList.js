import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component {

	componentDidMount() {
		this.props.fetchPostsAndUsers();
	}

	renderPosts = () => {
		return this.props.posts.map(post => {
			return (
				<div key={post.id}>
					<h2>{post.title}</h2>
					{post.body}
					<UserHeader userId={post.userId} />
				</div>
			);
		});
	};

	render() {
		return (
			<div>
				{this.renderPosts()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state.posts,
	};
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);