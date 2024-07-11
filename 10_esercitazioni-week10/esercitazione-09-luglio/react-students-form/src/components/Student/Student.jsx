// function Student(props) {
// 	const { student, onClick } = props;

function Student({ student = { id: "", nome: "", cognome: "", citta: "" }, onClick }) {
	<li>
		{student.nome} {student.cognome}
		<button id={student.id} onClick={onClick}>
			delete
		</button>
	</li>;
}

export { Student };
