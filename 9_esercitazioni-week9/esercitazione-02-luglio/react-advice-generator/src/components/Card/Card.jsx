import { Button } from "../Button/Button.jsx";
import "./Card.css";

function Card(props) {
	const { id, advice, setAdvice } = props;
	return (
		<>
			<div className='card'>
				<h2>ADVICE #{id}</h2>
				<p>"{advice}"</p>

				<img className='pattern-divider' src='./public/images/pattern-divider-mobile.svg' alt='Pattern divider' />

				<Button setAdvice={setAdvice} />
			</div>
		</>
	);
}

export { Card };
