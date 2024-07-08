import styles from "./Form.module.css";

function Form(props) {
	const { todos, setTodos, newTodo, setNewTodo } = props;

	const addTodo = (e) => {
		e.preventDefault();
		if (!newTodo.title.length) return;
		setTodos([...todos, newTodo]);
		setNewTodo({ title: "" });
	};

	const updateTitle = (e) => {
		const title = e.target.value;
		const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
		setNewTodo({ id: id, title: title });
	};

	return (
		<form className={styles.container__form}>
			<input className={styles.container__form__input} type='text' placeholder='ToDo' value={newTodo.title} onChange={updateTitle} />
			<input className={styles.container__form__add} type='submit' value='Add' onClick={addTodo} />
		</form>
	);
}

export { Form };
