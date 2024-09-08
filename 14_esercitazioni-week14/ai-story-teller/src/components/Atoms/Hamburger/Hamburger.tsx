import { Dispatch, SetStateAction } from "react";
import style from "./Hamburger.module.scss";

interface HamburgerProps {
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = (props: HamburgerProps) => {
	const { active: newActive, setActive: setNewActive } = props;

	return (
		<div className={`${style.main} ${newActive ? style.active : ""}`} onClick={() => setNewActive(!newActive)}>
			<div className={style.breadUp} />
			<div className={style.hamburger} />
			<div className={style.breadDown} />
		</div>
	);
};

export default Hamburger;
