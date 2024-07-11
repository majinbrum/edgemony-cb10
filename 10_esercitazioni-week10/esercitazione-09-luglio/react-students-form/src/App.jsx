import { useState } from "react";
import { Student } from "./components/Student/Student.jsx";
import styles from "./App.module.css";

const initialStudents = [
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

const initialNewStudent = { nome: "", cognome: "", citta: "" };

function App() {
	const [students, setStudents] = useState(initialStudents);
	const [newStudent, setNewStudent] = useState(initialNewStudent);
	const [filter, setFilter] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setStudents([
			...students,
			{
				id: self.crypto.randomUUID(),
				nome: newStudent.nome,
				cognome: newStudent.cognome,
				citta: newStudent.citta,
			},
		]);
		setNewStudent(initialNewStudent);
		console.log(e.target);
	};

	const handleChange = (e) => {
		const id = e.target.id;
		const value = e.target.value;
		setNewStudent((prevState) => ({ ...prevState, [id]: value }));
	};

	const handleFilter = (e) => {
		const id = e.target.id;
		if (id === "tutti") {
			setFilter("");
		} else {
			setFilter(id);
		}
	};

	const handleDelete = (e) => {
		const newStudentsList = students.filter((student) => student.id !== e.target.id);
		setStudents(newStudentsList);
	};

	return (
		<>
			<div className={styles.container}>
				<form onSubmit={handleSubmit}>
					<label htmlFor='nome'>Nome</label>
					<input id='nome' type='text' placeholder='Inserire nome' value={newStudent.nome} onChange={handleChange} />

					<label htmlFor='cognome'>Cognome</label>
					<input id='cognome' type='text' placeholder='Inserire cognome' value={newStudent.cognome} onChange={handleChange} />

					<label htmlFor='citta'>Città</label>
					<input id='citta' type='text' placeholder='Inserire città' value={newStudent.citta} onChange={handleChange} />

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
						.map((student) => (
							<Student key={student.id} student={student} onClick={handleDelete} />
						))}
				</ul>
			</div>
		</>
	);
}

export default App;
