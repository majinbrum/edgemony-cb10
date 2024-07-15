import { useEffect, useState } from "react";
import Post from "./components/Post.jsx";
import "./App.css";

function App() {
	const [counter, setCounter] = useState(1);
	const [post, setPost] = useState(null);

	const updateCounter = (e) => {
		const value = e.target.value;
		setCounter(value);
	};

	const getData = async () => {
		try {
			const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${counter}`);
			const post = await data.json();
			setPost(post);
			console.log(post);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getData();
	}, [counter]);

	return (
		<>
			<div>
				{post && <Post post={post} />}
				<hr />
				<div className='change-id'>
					<p>Change post id you want to read:</p>
					<input type='number' onChange={updateCounter} value={counter} />
				</div>
			</div>
		</>
	);
}

export default App;
