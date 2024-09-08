import style from "./Button.module.scss";

interface ButtonProps {
	className: string;
	label: string;
	onClick?: () => void;
	disabled?: boolean;
}

const Button = (props: ButtonProps) => {
	const { className, label, onClick, disabled } = props;
	return (
		<button className={`${style.main} ${style[className]}`} onClick={onClick} disabled={disabled}>
			{label}
		</button>
	);
};

export default Button;
