import { useState } from "react";
import { Card } from "./components/Card/Card.jsx";
import advices from "./assets/data.json";
import style from "./style.module.css";

function App() {
	const [advice, setAdvice] = useState(advices[0]);
	return (
		<>
			<div className={style.container}>
				<Card id={advice.id} advice={advice.advice} setAdvice={setAdvice} />
			</div>
		</>
	);
}

export default App;
