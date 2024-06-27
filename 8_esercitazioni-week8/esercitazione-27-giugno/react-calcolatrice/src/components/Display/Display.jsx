import { useState } from "react";
import "./Display.css";

function Display({ displayContent }) {
	const [colorMode, setColorMode] = useState("dark-mode");
	document.documentElement.classList = colorMode;

	function handleColorMode() {
		if (colorMode === "dark-mode") {
			setColorMode("light-mode");
		} else {
			setColorMode("dark-mode");
		}
	}

	return (
		<>
			<div className='display'>
				<div className='color-mode' onClick={handleColorMode}>
					<button className='light-mode'>☼</button>
					<button className='dark-mode'>☽</button>
				</div>
				<h2 className='result'>{displayContent}</h2>
			</div>
		</>
	);
}

export { Display };
