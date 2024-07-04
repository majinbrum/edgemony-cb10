import templateStyleCSS from "./Template.module.css";

function TemplateFriendly(props) {
	const { userInfo } = props;

	return (
		<div className={templateStyleCSS.templateEmail}>
			<h2>Friendly version</h2>
			<h4>
				To: <strong>{userInfo.email}</strong>
			</h4>
			<h3>
				Subject: Welcome to Our Newsletter, <strong>{userInfo.firstName}</strong>! 🎉
			</h3>

			<p>
				Hi <strong>{userInfo.firstName}</strong> <strong>{userInfo.lastName}</strong>, <br />
				Welcome aboard! We're super excited to have you join our newsletter family all the way from <strong>{userInfo.city}</strong>. <br />
				<br />
				We’ve got a ton of great stuff lined up just for you – from the latest updates to exclusive content that we think you’ll love. <br />
				<br />
				Here’s a special message from our team:
			</p>

			<p>
				<em className={templateStyleCSS.textareaMessage}>{userInfo.message}</em>
			</p>

			<p>
				Thanks for subscribing!
				<br />
				<br />
				If you ever have any questions or just want to say hi, don’t hesitate to reach out.
				<br />
				<br />
				Best wishes
			</p>
		</div>
	);
}

export { TemplateFriendly };
