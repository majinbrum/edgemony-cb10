function Post(props) {
	const { post } = props;

	return (
		<div>
			<h3>Author: user{post.userId}</h3>
			<h1>
				<mark>{post.title}</mark>
			</h1>
			<h2>Post n.{post.id}</h2>
			<p>"{post.body}"</p>
		</div>
	);
}

export default Post;
