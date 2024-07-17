import { useEffect, useState } from "react";

function About() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		setUser(user);
	}, []);

	return (
		<>
			<h1>Sono la pagina about</h1>
			<p>About {user && user.name}</p>
		</>
	);
}

export default About;
