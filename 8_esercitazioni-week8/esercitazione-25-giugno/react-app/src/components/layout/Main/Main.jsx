import "./Main.css";
import posts from "../../../assets/posts.json";
import users from "../../../assets/users.json";

function Main() {
	// console.log(posts);
	return (
		<main>
			{posts.map((post) => (
				<Article key={post.id} post={post} />
			))}
		</main>
	);
}

function Article({ post }) {
	const user = users.find((singleUser) => singleUser.id === post.userId);
	return (
		<article>
			{user && <User key={user.id} user={user} />}
			<div className='article'>
				<h2>{post.title}</h2>
				<p>{post.body}</p>
			</div>
			<div className='article-info'>
				<div className='tags-div'>
					{post.tags.map((child, index) => (
						<ArticleTag key={`${index}+${child}`} tag={child} />
					))}
				</div>
				<div className='other-info'>
					<span>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
							<path d='M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z' />
						</svg>
						<h4>{post.views}</h4>
					</span>
					<span>
						<svg clipRule='evenodd' fillRule='evenodd' strokeLinejoin='round' strokeMiterlimit='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='m7.234 3.004c-2.652 0-5.234 1.829-5.234 5.177 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-3.353-2.58-5.168-5.229-5.168-1.836 0-3.646.866-4.771 2.554-1.13-1.696-2.935-2.563-4.766-2.563zm0 1.5c1.99.001 3.202 1.353 4.155 2.7.14.198.368.316.611.317.243 0 .471-.117.612-.314.955-1.339 2.19-2.694 4.159-2.694 1.796 0 3.729 1.148 3.729 3.668 0 2.671-2.881 5.673-8.5 11.127-5.454-5.285-8.5-8.389-8.5-11.127 0-1.125.389-2.069 1.124-2.727.673-.604 1.625-.95 2.61-.95z'
								fillRule='nonzero'
							/>
						</svg>
						<h4>{post.reactions.likes}</h4>
					</span>
					<span>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
							<path d='M19.406 14.442c1.426-.06 2.594-.858 2.594-2.506 0-1-.986-6.373-1.486-8.25-.714-2.689-2.471-3.686-5.009-3.686-2.283 0-4.079.617-5.336 1.158-2.585 1.113-4.665 1.842-8.169 1.842v9.928c3.086.401 6.43.956 8.4 7.744.483 1.66.972 3.328 2.833 3.328 3.448 0 3.005-5.531 2.196-8.814 1.107-.466 2.767-.692 3.977-.744zm-.207-1.992c-2.749.154-5.06 1.013-6.12 1.556.431 1.747.921 3.462.921 5.533 0 2.505-.781 3.666-1.679.574-1.993-6.859-5.057-8.364-8.321-9.113v-6c2.521-.072 4.72-1.041 6.959-2.005 1.731-.745 4.849-1.495 6.416-.614 1.295.836 1.114 1.734.292 1.661l-.771-.032c-.815-.094-.92 1.068-.109 1.141 0 0 1.321.062 1.745.115.976.123 1.028 1.607-.04 1.551-.457-.024-1.143-.041-1.143-.041-.797-.031-.875 1.078-.141 1.172 0 0 .714.005 1.761.099s1.078 1.609-.004 1.563c-.868-.037-1.069-.027-1.069-.027-.75.005-.874 1.028-.141 1.115l1.394.167c1.075.13 1.105 1.526.05 1.585z' />
						</svg>
						<h4>{post.reactions.dislikes}</h4>
					</span>
				</div>
			</div>
		</article>
	);
}

function ArticleTag({ tag }) {
	return <h4 className='article-tag'>{tag[0].toUpperCase() + tag.slice(1)}</h4>;
}

function User({ user }) {
	// console.log(user);
	return (
		<>
			<div className='user'>
				<div className='user-img'>
					<img src={user.image} alt='User profile picture' />
				</div>
				<div className='user-info'>
					<h3>{`${user.firstName} ${user.lastName} (${user.username})`}</h3>
					<h4>{user.company.title}</h4>
				</div>
			</div>
		</>
	);
}

export { Main };
