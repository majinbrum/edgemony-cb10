import bgPattern from "/public/images/bg-pattern.svg";
import bgCircles from "/public/images/pattern-circles.svg";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import styles from "./App.module.css";

function App() {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.bg}>
					<img src={bgPattern} alt='Background pattern' />
					<img className={styles.bgCircles} src={bgCircles} alt='Background circles' width='146' height='145' />
				</div>
				<Header />
				<Card />

				<div className={styles.attribution}>
					Challenge by{" "}
					<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
						Frontend Mentor
					</a>
					. Coded by <a href='#'>Bruna Alamia</a>.
				</div>
			</div>
		</>
	);
}

export default App;
