import { useState } from "react";
import { Keyboard } from "./components/Keyboard/Keyboard.jsx";
import { Display } from "./components/Display/Display.jsx";
import "./styles/layout.css";

function App() {
	const [displayContent, setDisplayContent] = useState(0);

	return (
		<>
			<div className='container'>
				<h1>Calculator</h1>
				<div className='calculator'>
					<Display displayContent={displayContent} />
					<Keyboard displayContent={displayContent} setDisplayContent={setDisplayContent} />
				</div>
			</div>
		</>
	);
}

export default App;
