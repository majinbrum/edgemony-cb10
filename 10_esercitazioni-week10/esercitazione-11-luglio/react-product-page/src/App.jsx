import { useState } from "react";
import styles from "./App.module.css";

import { Navbar } from "./components/Navbar/Navbar.jsx";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className='container'>
				<Navbar />
			</div>
		</>
	);
}

export default App;
