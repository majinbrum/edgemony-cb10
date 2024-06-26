import { Header } from "./components/layout/Header/Header.jsx";
import { Main } from "./components/layout/Main/Main.jsx";
import { Aside } from "./components/layout/Aside/Aside.jsx";
import { Footer } from "./components/layout/Footer/Footer.jsx";
import "./styles/layout.css";

function App() {
	return (
		<>
			<Header />
			<Main />
			<Aside />
			<Footer />
		</>
	);
}

export default App;
