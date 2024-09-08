import { Dispatch, SetStateAction } from "react";
import style from "./Header.module.scss";
import Hamburger from "@/components/Atoms/Hamburger/Hamburger";

interface HeaderProps {
	title: string;
	showHamburger: boolean;
	setShowHamburger: Dispatch<SetStateAction<boolean>>;
}

const Header = (props: HeaderProps) => {
	const { title, showHamburger, setShowHamburger } = props;
	return (
		<header className={style.header}>
			<div className={style.main}>
				<h1 className={style.title}>{title}</h1>
				<Hamburger active={showHamburger} setActive={setShowHamburger} />
			</div>
		</header>
	);
};

export default Header;
