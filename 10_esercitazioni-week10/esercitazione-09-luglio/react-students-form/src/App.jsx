import { useState } from "react";
import Student from "./components/Student/Student.jsx";
import styles from "./App.module.css";

const initialState = [
	{
		id: self.crypto.randomUUID(),
		nome: "Nicola",
		cognome: "Marmugi",
		citta: "Viareggio",
	},
	{
		id: self.crypto.randomUUID(),
		nome: "Bruna",
		cognome: "Alamia",
		citta: "Palermo",
	},
];

const initialInput = { nome: "", cognome: "", citta: "" };

function App() {
	const [students, setStudents] = useState(initialState);
	const [input, setInput] = useState(initialInput);
	const [filter, setFilter] = useState("");

	/**
	 * Cancella uno studente dalla lista degli studenti e aggiorna lo stato
	 * @param {*} e
	 */
	const handleDelete = (e) => {
		const tmpStudents = students.filter((student) => student.id !== e.target.id);
		setStudents(tmpStudents);
	};

	/**
	 * Crea un nuovo studente con i dati che vengono presi dagli input della form
	 * @param {*} e
	 */
	const handleSubmit = (e) => {
		e.preventDefault();

		const id = self.crypto.randomUUID();
		const nome = input.nome;
		const cognome = input.cognome;
		const citta = input.citta;
		setStudents([
			...students,
			{
				id,
				nome,
				cognome,
				citta,
			},
		]);
		setInput(initialInput);
	};

	/**
	 * Aggiorna lo stato input ogni volta che viene digitato qualcosa negli input della form
	 * @param {*} e
	 */
	const handleChange = (e) => {
		const id = e.target.id;
		const value = e.target.value;
		setInput((prevState) => ({ ...prevState, [id]: value }));
	};

	/**
	 * Aggiorna lo stato che gestisce il filtering
	 * @param {*} e
	 */
	const handleFilter = (e) => {
		const id = e.target.id;
		if (id === "tutti") {
			setFilter("");
		} else {
			setFilter(id);
		}
	};

	return (
		<>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					<label htmlFor='nome'>Nome</label>
					<input id='nome' type='text' placeholder='Inserire nome' value={input.nome} onChange={handleChange} />

					<label htmlFor='cognome'>Cognome</label>
					<input id='cognome' type='text' placeholder='Inserire cognome' value={input.cognome} onChange={handleChange} />

					<label htmlFor='citta'>Città</label>
					<input id='citta' type='text' placeholder='Inserire città' value={input.citta} onChange={handleChange} />

					<button type='submit'>submit</button>
				</form>

				<button key={self.crypto.randomUUID()} id='tutti' onClick={handleFilter}>
					Tutti
				</button>
				{students.map((student) => (
					<button key={self.crypto.randomUUID()} id={student.citta} onClick={handleFilter}>
						{student.citta}
					</button>
				))}

				<ul>
					{students
						.filter((student) => student.citta.includes(filter))
						.map((student) => {
							return <Student key={student.id} student={student} onClick={handleDelete} />;
						})}
				</ul>
			</div>
		</>
	);
}

export default App;
