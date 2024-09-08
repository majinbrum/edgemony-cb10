import style from "@/styles/Home.module.scss";
import Head from "next/head";
import Header from "@/components/Molecules/Header/Header";
import InputBox from "@/components/Molecules/InputBox/InputBox";
import WindowBox from "@/components/Organism/WindowBox/WindowBox";
import { useState, useEffect, useRef } from "react";
import SelectBox from "@/components/Molecules/SelectBox/SelectBox";
import { genresList } from "@/constants/common";
import Button from "@/components/Atoms/Button/Button";
import SwitchBox from "@/components/Molecules/SwitchBox/SwitchBox";
import Toast from "@/components/Atoms/Toast/Toast";

const cardList = [
	{ title: "Card 1", author: "Author 1", content: "Content 1" },
	{ title: "Card 2", author: "Author 2", content: "Content 2" },
	{ title: "Card 3", author: "Author 3", content: "Content 3" },
	{ title: "Card 4", author: "Author 4", content: "Content 4" },
	{ title: "Card 5", author: "Author 5", content: "Content 5" },
	{ title: "Card 6", author: "Author 6", content: "Content 6" },
];

export default function Home() {
	const [showHamburger, setShowHamburger] = useState(false);
	const [protagonist, setProtagonist] = useState("");
	const [antagonist, setAntagonist] = useState("");
	const [genre, setGenre] = useState("");
	const [promptNotes, setPromptNotes] = useState("");
	const [pegi12, setPegi12] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [toast, setToast] = useState(error);
	const [response, setResponse] = useState("");
	const [audioLabel, setAudioLabel] = useState("Read");

	const carouselRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setToast(error);
	}, [error]);

	const handleGenerate = async () => {
		setLoading(true);
		setError(false);
		console.log({ protagonist, antagonist, genre });
		const prompt = `Generate a short ${genre} story,  ${pegi12 ? "" : "for children"}, where the protagonist's name is ${protagonist} and the antagonist's name is ${antagonist}. Note: ${promptNotes}`;

		if (protagonist.trim().length > 0 && antagonist.trim().length > 0 && genre.trim().length > 0) {
			try {
				const response = await fetch("/api/generate", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ prompt }),
				});
				const data = await response.json();
				setResponse(data);
				console.log("Story generated successfully", data);
			} catch (e) {
				console.error("Error generating story", e);
				setError(true);
			} finally {
				setLoading(false);
			}
		}
	};

	const playVoice = () => {
		// rate: 0.1/1 slower
		// rate: 1/10 faster
		if (!response) {
			console.error("No response text to read.");
			return;
		}
		if (audioLabel == "Read") {
			const responseSplit = response.split(".");

			responseSplit.forEach((sentence, i) => {
				const utterance = new SpeechSynthesisUtterance(sentence);
				utterance.lang = "en-GB";
				speechSynthesis.speak(utterance);
				setAudioLabel("Pause");

				if (i == responseSplit.length - 1) {
					utterance.onend = () => {
						setAudioLabel("Read");
					};
				}
			});
		}
		if (audioLabel == "Resume") {
			speechSynthesis.resume();
			setAudioLabel("Pause");
		}
		if (audioLabel == "Pause") {
			speechSynthesis.pause();
			setAudioLabel("Resume");
		}
	};

	const handleCarouselBtn = (index: number) => {
		carouselRef.current?.scrollTo({ behavior: "smooth", left: 300 * index });
	};

	return (
		<>
			<Head>
				<title>Ai Story Teller</title>
				<meta name='description' content='AI based app to generate stories' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className={style.main}>
				<Header title='AI Story Teller ' showHamburger={showHamburger} setShowHamburger={setShowHamburger} />

				<div className={`${style.hamburgerWindow} ${showHamburger ? style.active : ""}`}>
					<div className={style.carousel} ref={carouselRef}>
						{cardList.map((card, i) => (
							<div key={i} className={style.card}>
								<h2>{card.title}</h2>
								<h3>{card.author}</h3>
								<p>{card.content}</p>
							</div>
						))}
					</div>
					<div className={style.carouselBtnSet}>
						{cardList.map((item, index) => (
							<Button className='' key={index} label={`${index + 1}`} onClick={() => handleCarouselBtn(index)} />
						))}
					</div>
				</div>
				<div className={`${style.mask} ${showHamburger ? style.active : ""}`} />
				{toast && <Toast message='Error generating story' setAction={setToast} />}
				<div className={style.content}>
					<WindowBox title='Story Params'>
						<div className={style.container}>
							<InputBox label='Protagonist' value={protagonist} setValue={setProtagonist} />
							<InputBox label='Antagonist' value={antagonist} setValue={setAntagonist} />
							<InputBox label='Notes' value={promptNotes} setValue={setPromptNotes} />
							<SelectBox label='Genre:' list={genresList} setAction={setGenre} />
							<Button
								className='generate-btn'
								label='Generate'
								onClick={handleGenerate}
								disabled={protagonist.trim().length <= 0 || antagonist.trim().length <= 0 || genre.trim().length <= 0 || loading}
							/>
							<SwitchBox label='Pegi12' value={pegi12} setValue={setPegi12} />
						</div>

						{loading && <div className={style.loading}>Loading...</div>}
						{error && (
							<div className={style.main}>
								<div className={style.result}>Error generating story</div>
							</div>
						)}

						{!loading && !error && response && (
							<div className={style.main}>
								<div className={style.result}>
									<div className={style.audioBtn}>
										<Button className='generate-btn' label={audioLabel} onClick={playVoice} />
									</div>
									{response}
								</div>
							</div>
						)}
					</WindowBox>
				</div>
			</main>
		</>
	);
}
