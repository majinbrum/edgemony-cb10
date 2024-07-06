import { useState } from "react";
import { Result } from "./components/Result/Result.jsx";
import { Form } from "./components/Form/Form.jsx";

import style from "./style.module.css";

function App() {
	const [result, setResult] = useState();
	const [dataInput, setDataInput] = useState({ amount: "", term: "", rate: "", type: "" });
	console.log(dataInput);

	return (
		<>
			<main>
				<div className={style.container}>
					<Form dataInput={dataInput} setDataInput={setDataInput} setResult={setResult} />

					<Result result={result} />
				</div>

				{/* frontend mentor */}
				<div className={style.attribution}>
					Challenge by <a href='https://www.frontendmentor.io?ref=challenge'>Frontend Mentor</a>. Coded by <a href='#'>Bruna Alamia</a>.
				</div>
			</main>
		</>
	);
}

export default App;
