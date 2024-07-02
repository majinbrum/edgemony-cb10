import { useState } from "react";
import { Counter } from "./components/Counter/Counter";
import "./styles/layout.css";

function App() {
	const [count, setCount] = useState(0);
	return (
		<>
			<div className='container'>
				<div className='counter-container'>
					<div className='count'>{count}</div>
					<Counter count={count} setCount={setCount} />
				</div>
			</div>
		</>
	);
}

export default App;
