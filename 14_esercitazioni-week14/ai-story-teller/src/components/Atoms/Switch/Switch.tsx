import { Dispatch, SetStateAction } from "react";
import style from "./Switch.module.scss";

interface SwitchProps {
	active: Boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
}

const Switch = (props: SwitchProps) => {
	const { active, setActive } = props;

	return (
		// <div className={`${style.main} ${active ? style.active : ""}`} onClick={() => setActive(!active)}>
		<div className={style.main} onClick={() => setActive(!active)}>
			<div className={`${style.dotBtn} ${active ? style.active : ""}`} />
		</div>
	);
};

export default Switch;
