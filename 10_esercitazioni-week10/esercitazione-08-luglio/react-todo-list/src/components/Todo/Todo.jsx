import styles from "./Todo.module.css";

function Todo(props) {
	const { todo, todos, setTodos } = props;

	const deleteTodo = (todoToDelete) => {
		const newTodoList = todos.filter((todo) => todo.id !== todoToDelete);
		setTodos(newTodoList);
	};

	return (
		<li className={styles.container__list__todo}>
			{todo.title}
			<button className={styles.container__list__todo__delete} onClick={() => deleteTodo(todo.id)}>
				✕
			</button>
		</li>
	);
}

export { Todo };
