import { ChangeEvent, Dispatch, SetStateAction } from "react";
import style from "./SelectBox.module.scss";

interface SelectBoxProps {
	label: string;
	list: ListOption[];
	setAction: Dispatch<SetStateAction<string>>;
}

const SelectBox = (props: SelectBoxProps) => {
	const { label, list, setAction } = props;

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setAction(e.target.value);
	};

	return (
		<div className={style.main}>
			<h3>{label}</h3>
			<select id='select' onChange={handleChange}>
				<option value='' hidden>
					Select Genre
				</option>
				{list.map((option) => {
					return (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default SelectBox;
