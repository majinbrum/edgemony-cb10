import { useState } from "react";
import styles from "./App.module.css";

const initialTodos = [
	{
		id: 1,
		title: "Fare la spesa",
	},
	{
		id: 2,
		title: "Rinnovare assicurazione",
	},
];

function App() {
	const [todos, setTodos] = useState(initialTodos);
	const [newTodo, setNewTodo] = useState({ title: "" });

	const addTodo = () => {
		if (!newTodo.title.length) return;

		setTodos([...todos, newTodo]);
		setNewTodo({ title: "" });
	};

	const updateTitle = (e) => {
		const id = todos[todos.length - 1].id + 1;
		const title = e.target.value;
		setNewTodo({ id: id, title: title });
	};

	const deleteTodo = (todoToDelete) => {
		const newTodoList = todos.filter((todo) => todo.id !== todoToDelete);
		setTodos(newTodoList);
	};

	return (
		<>
			<div className={styles.container}>
				<input type='text' placeholder='ToDo' value={newTodo.title} onChange={updateTitle} />
				<button onClick={addTodo}>Add</button>

				<div className={styles.container__list}>
					<h2>List di Todo</h2>
					<ul>
						{todos.map((todo) => (
							<li key={todo.id}>
								{todo.title}
								<button onClick={() => deleteTodo(todo.id)}>Delete</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
