import { useEffect, useState } from "react";
import { Card } from "./components/Card/Card.jsx";
import style from "./style.module.css";

function App() {
	const [advice, setAdvice] = useState(null);

	const getRandomAdvice = async () => {
		try {
			const data = await fetch("https://api.adviceslip.com/advice");
			const advice = await data.json();
			setAdvice(advice.slip);
			console.log(advice.slip);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getRandomAdvice();
	}, []);

	return (
		<>
			<div className={style.container}>{advice && <Card advice={advice} onClick={getRandomAdvice} />}</div>
		</>
	);
}

export default App;
