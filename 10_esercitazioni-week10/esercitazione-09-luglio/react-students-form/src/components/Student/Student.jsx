function Student(props) {
	const { student, onClick } = props;

	return (
		<li>
			{student.nome} {student.cognome}
			<button id={student.id} onClick={onClick}>
				delete
			</button>
		</li>
	);
}

export default Student;
