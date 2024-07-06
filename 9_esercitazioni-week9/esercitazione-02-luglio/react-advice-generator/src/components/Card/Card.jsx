import { Button } from "../Button/Button.jsx";
import style from "./Card.module.css";

function Card(props) {
	const { id, advice, setAdvice } = props;
	return (
		<>
			<div className={style.card}>
				<h1>ADVICE #{advice.id}</h1>
				<p>"{advice.advice}"</p>

				<img className={style.patternDivider} src='./public/images/pattern-divider-mobile.svg' alt='Pattern divider' />

				<Button advice={advice} setAdvice={setAdvice} />
			</div>
		</>
	);
}

export { Card };
