import { Dispatch, SetStateAction, useEffect } from "react";
import style from "./Toast.module.scss";

interface ToastProps {
	message: string;
	setAction: Dispatch<SetStateAction<boolean>>;
	type?: "success" | "error" | "warning"; // default "success"
}

const Toast = (props: ToastProps) => {
	const { message, setAction, type } = props;
	useEffect(() => {
		// console.log("Nascita");
		// return () => console.log("Morte");
		const timeoutID = setTimeout(() => {
			setAction(false);
		}, 3000);
		return () => clearTimeout(timeoutID);
	}, [setAction]);

	return (
		<div className={style.main}>
			<div className={style.header}>
				<p>{message}</p>
				<p onClick={() => setAction(false)}>x</p>
			</div>

			<div className={style.progressBar}>
				<div className={style.fill} />
			</div>
		</div>
	);
};

export default Toast;
