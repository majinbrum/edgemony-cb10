import "./Main.css";
import posts from "../../../assets/posts.json";

function Main() {
	console.log(posts);
	return (
		<main>
			{posts.map((post) => (
				<Article key={post.id} title={post.title} body={post.body} author={post.author} reactions={post.reactions} views={post.views} children={post.tags} />
			))}
		</main>
	);
}

function Article(props) {
	const { title, body, author, reactions, views, children } = props;
	return (
		<article>
			<div>
				<h3>{author}</h3>
				<h2>{title}</h2>
				<p>{body}</p>
			</div>
			<div className='article-info'>
				<div className='tags-div'>
					{children.map((child, index) => (
						<ArticleTag key={`${index}+${child}`} tag={child} />
					))}
				</div>
			</div>
		</article>
	);
}

function ArticleTag({ tag }) {
	return <h4 className='article-tag'>{tag[0].toUpperCase() + tag.slice(1)}</h4>;
}

export { Main };
