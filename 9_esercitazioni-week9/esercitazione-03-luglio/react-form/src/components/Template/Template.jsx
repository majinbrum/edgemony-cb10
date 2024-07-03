import templateStyle from "./Template.module.css";

function Template(props) {
	const { userInfo, setUserInfo } = props;

	const changeTemplateStyle = (e) => {
		// switch (e.target.id) {
		// 	value "formal":
		// 	setUserInfo(templateStyles[])
		// }
	};

	return (
		<div className={templateStyle.templateContainer}>
			<div className={templateStyle.templateBtnsContainer}>
				<button className={templateStyle.templateBtn} id='formal' onClick={(e) => changeTemplateStyle(e)}>
					Formal
				</button>
				<button className={templateStyle.templateBtn} id='friendly' onClick={(e) => changeTemplateStyle(e)}>
					Friendly
				</button>
				<button className={templateStyle.templateBtn} id='playful' onClick={(e) => changeTemplateStyle(e)}>
					Playful
				</button>
			</div>
			<div className={templateStyle.templateEmail}>
				<h3>
					To: <strong>{userInfo.email}</strong>
				</h3>
				<h2>
					Subject: Welcome to Our Newsletter, <strong>{userInfo.firstName}</strong>!{" "}
				</h2>
				<p>
					Dear <strong>{userInfo.firstName}</strong> <strong>{userInfo.lastName}</strong>, Welcome to our newsletter community! We are thrilled to have you join us from{" "}
					<strong>{userInfo.city}</strong>. Our team is dedicated to bringing you the latest updates, news, and exclusive content that we believe you'll find valuable and engaging. Here’s a special
					message from our team:
					<br />
					<br />
					<em className={templateStyle.textareaMessage}>{userInfo.message}</em>
					<br />
					<br />
					Thank you for subscribing. We look forward to connecting with you and keeping you informed on all the exciting things happening. If you have any questions or suggestions, feel free to reach
					out to us at any time.
					<br />
					<br />
					Best regards
				</p>
			</div>
		</div>
	);
}

export { Template };
