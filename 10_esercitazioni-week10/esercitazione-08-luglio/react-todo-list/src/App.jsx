import { useState } from "react";
import { Form } from "./components/Form/Form.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import styles from "./App.module.css";

function App() {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState({ title: "" });

	return (
		<>
			<div className={styles.container}>
				<TodoList todos={todos} setTodos={setTodos} />

				<Form todos={todos} setTodos={setTodos} newTodo={newTodo} setNewTodo={setNewTodo} />
			</div>
		</>
	);
}

export default App;
