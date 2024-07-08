import styles from "./TodoList.module.css";
import { Todo } from "../Todo/Todo.jsx";

function TodoList(props) {
	const { todos, setTodos } = props;

	return (
		<div className={styles.container__list}>
			<h2>Todo List</h2>
			<p>Keep track of your todos</p>
			<ul className={styles.container__list__ul}>
				{todos.map((todo) => (
					<Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
				))}
			</ul>
		</div>
	);
}

export { TodoList };
