import { useState } from "react";
import { ButtonsList } from "./components/ButtonsList/ButtonsList";
import "./styles/layout.css";

function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<div className='container'>
				<div>{count}</div>
				<ButtonsList count={count} setCount={setCount} />
			</div>
		</>
	);
}

export default App;
