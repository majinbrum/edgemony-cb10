import { useEffect, useState } from "react";

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then((res) => res.json())
			.then((res) => setUser(res));
	}, []);

	useEffect(() => {
		if (!user) return;
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	return (
		<>
			<div>
				<h1>Sono la Home </h1>
				<p className='bg-green-300'>Bentornata, {user && user.name}!</p>
			</div>
		</>
	);
}

export default App;
