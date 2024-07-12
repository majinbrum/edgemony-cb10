import Card from "./components/Card.jsx";

function App() {
	return (
		<>
			<div className='font-sans bg-[#0C192C] w-screen h-dvh flex flex-col gap-y-8 justify-center items-center'>
				<Card />

				<div className='attribution'>
					Challenge by{" "}
					<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
						Frontend Mentor
					</a>
					. Coded by <a href='#'>Bruna Alamia</a>.
				</div>
			</div>
		</>
	);
}

export default App;
