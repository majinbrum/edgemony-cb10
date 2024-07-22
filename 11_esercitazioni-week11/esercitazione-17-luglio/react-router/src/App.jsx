import { useEffect, useState } from "react";
import ItemUser from "./components/ItemUser.jsx";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((res) => setUsers(res));
	}, []);

	return (
		<>
			<div>
				<h1>Sono la Home </h1>
				<p className='bg-green-300'>Lista utenti</p>
				<ul>
					{users.map((user) => {
						return (
							<li key={user.id}>
								<ItemUser user={user} />
								{/* <Link to={`user/${user.id}`} className='underline text-blue-600' >
									{user.name}
								</Link> */}
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default App;
