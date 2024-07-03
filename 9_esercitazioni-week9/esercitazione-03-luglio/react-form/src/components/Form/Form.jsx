import formStyle from "./Form.module.css";

function Form(props) {
	const { setUserInfo, templateVisibility, setTemplateVisibility } = props;

	const handleChange = (e) => {
		const id = e.target.id;
		const value = e.target.value;
		setUserInfo((prevState) => ({ ...prevState, [id]: value }));
	};

	const generateTemplate = (e) => {
		e.preventDefault();
		setTemplateVisibility(true);
	};

	return (
		<form className={formStyle.formContainer}>
			<h1>Email template generator</h1>

			<div className={formStyle.nameBox}>
				<div className={formStyle.infoBox}>
					<label className={formStyle.infoLabel}>Name</label>
					<input className={formStyle.infoInput} type='text' id='firstName' onChange={(e) => handleChange(e)} />
				</div>

				<div className={formStyle.infoBox}>
					<label className={formStyle.infoLabel}>Last Name</label>
					<input className={formStyle.infoInput} type='text' id='lastName' onChange={(e) => handleChange(e)} />
				</div>
			</div>

			<div className={formStyle.infoBox}>
				<label className={formStyle.infoLabel}>Email Address</label>
				<input className={formStyle.infoInput} type='email' id='email' onChange={(e) => handleChange(e)} />
			</div>

			<div className={formStyle.infoBox}>
				<label className={formStyle.infoLabel}>City</label>
				<input className={formStyle.infoInput} type='text' id='city' onChange={(e) => handleChange(e)} />
			</div>

			<div className={formStyle.infoBox}>
				<label className={formStyle.infoLabel}>Message</label>
				<textarea className={formStyle.infoInput} rows='4' cols='50' id='message' onChange={(e) => handleChange(e)} />
			</div>

			<button disabled={templateVisibility === true} className={formStyle.generateBtn} type='submit' onClick={(e) => generateTemplate(e)}>
				Generate template
			</button>
		</form>
	);
}

export { Form };
