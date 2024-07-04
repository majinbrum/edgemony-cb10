import templateStyleCSS from "./Template.module.css";

function TemplateFormal(props) {
	const { userInfo } = props;

	return (
		<div className={templateStyleCSS.templateEmail}>
			<h2>Formal version</h2>
			<h4>
				To: <strong>{userInfo.email}</strong>
			</h4>
			<h3>
				Subject: Welcome to Our Newsletter, <strong>{userInfo.firstName}</strong>!
			</h3>

			<p>
				Dear <strong>{userInfo.firstName}</strong> <strong>{userInfo.lastName}</strong>,
				<br />
				We are pleased to welcome you to our newsletter community.
				<br />
				<br />
				Your subscription from <strong>{userInfo.city}</strong> has been successfully processed, and we are delighted to have you with us.
				<br />
				<br />
				Our newsletter is designed to provide you with the most recent updates, news, and exclusive content pertinent to your interests.
				<br />
				<br />
				Please find a special message from our team below:
			</p>

			<p>
				<em className={templateStyleCSS.textareaMessage}>{userInfo.message}</em>
			</p>

			<p>
				Thank you for subscribing.
				<br />
				<br />
				Should you have any questions or require further assistance, do not hesitate to contact us. <br />
				<br />
				Warm regards
			</p>
		</div>
	);
}

export { TemplateFormal };
