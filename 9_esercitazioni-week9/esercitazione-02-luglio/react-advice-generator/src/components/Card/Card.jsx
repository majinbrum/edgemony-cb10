import { Button } from "../Button/Button.jsx";
import style from "./Card.module.css";

function Card(props) {
	const { id, advice, setAdvice } = props;
	return (
		<>
			<div className={style.card}>
				<h2>ADVICE #{id}</h2>
				<p>"{advice}"</p>

				<img className={style.patternDivider} src='./public/images/pattern-divider-mobile.svg' alt='Pattern divider' />

				<Button setAdvice={setAdvice} />
			</div>
		</>
	);
}

export { Card };
