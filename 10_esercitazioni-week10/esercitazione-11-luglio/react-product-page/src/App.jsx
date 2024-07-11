import { useState } from "react";
import styles from "./App.module.css";

import { Navbar } from "./components/Navbar/Navbar.jsx";
import Counter from "./components/counter/Counter.jsx";
import Button from "./components/button/Button.jsx";
import IconCart from "./components/icons/IconCart.jsx";

function App() {
	// const [count, setCount] = useState(0);

	return (
		<>
			<div className='container'>
				<Navbar />
				<h1>Hello world</h1>
				<Button text={"Add to cart"}>
					<IconCart fill={"var(--black)"} />
				</Button>
				<Counter />
			</div>
		</>
	);
}

export default App;
