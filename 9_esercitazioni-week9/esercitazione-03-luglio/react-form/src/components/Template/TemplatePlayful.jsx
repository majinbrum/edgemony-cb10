import templateStyleCSS from "./Template.module.css";

function TemplatePlayful(props) {
	const { userInfo } = props;

	return (
		<div className={templateStyleCSS.templateEmail}>
			<h2>Playful version</h2>
			<h4>
				To: <strong>{userInfo.email}</strong>
			</h4>
			<h3>
				Subject: Yay! Welcome, <strong>{userInfo.firstName}</strong>!
			</h3>

			<p>
				Hey <strong>{userInfo.firstName}</strong> <strong>{userInfo.lastName}</strong>, <br />
				Hooray! 🎉 You’ve just joined the coolest newsletter around, straight from <strong>{userInfo.city}</strong>! <br />
				<br />
				We’re stoked to have you with us and can’t wait to share awesome updates, fun news, and exclusive goodies. <br />
				<br />
				Check out this special message from our team:
			</p>

			<p>
				<em className={templateStyleCSS.textareaMessage}>{userInfo.message}</em>
			</p>

			<p>
				Thanks a bunch for subscribing!
				<br />
				<br />
				Got questions, or just wanna chat?
				<br />
				We’re here for you!
				<br />
				<br />
				Catch you soon
			</p>
		</div>
	);
}

export { TemplatePlayful };
