import { useState } from "react";
import templateStyleCSS from "./Template.module.css";

function Template(props) {
	const { userInfo } = props;

	const templateEmailStyles = [
		{
			style: "formal",
			title: "Formal version",
			mittente: (
				<>
					To: <strong>{userInfo.email}</strong>
				</>
			),
			subject: (
				<>
					Subject: Welcome to Our Newsletter, <strong>{userInfo.firstName}</strong>!
				</>
			),

			body1: (
				<>
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
				</>
			),

			body2: (
				<>
					Thank you for subscribing.
					<br />
					<br />
					Should you have any questions or require further assistance, do not hesitate to contact us. <br />
					<br />
					Warm regards
				</>
			),
		},

		{
			style: "friendly",
			title: "Friendly version",
			mittente: (
				<>
					To: <strong>{userInfo.email}</strong>
				</>
			),
			subject: (
				<>
					Subject: Welcome to Our Newsletter, <strong>{userInfo.firstName}</strong>! 🎉
				</>
			),
			body1: (
				<>
					Hi <strong>{userInfo.firstName}</strong> <strong>{userInfo.lastName}</strong>, <br />
					Welcome aboard! We're super excited to have you join our newsletter family all the way from <strong>{userInfo.city}</strong>. <br />
					<br />
					We’ve got a ton of great stuff lined up just for you – from the latest updates to exclusive content that we think you’ll love. <br />
					<br />
					Here’s a special message from our team:`
				</>
			),
			body2: (
				<>
					Thanks for subscribing!
					<br />
					<br />
					If you ever have any questions or just want to say hi, don’t hesitate to reach out.
					<br />
					<br />
					Best wishes
				</>
			),
		},

		{
			style: "playful",
			title: "Playful version",
			mittente: (
				<>
					To: <strong>{userInfo.email}</strong>
				</>
			),
			subject: (
				<>
					Subject: Yay! Welcome, <strong>{userInfo.firstName}</strong>!
				</>
			),

			body1: (
				<>
					Hey <strong>{userInfo.firstName}</strong> <strong>{userInfo.lastName}</strong>, <br />
					Hooray! 🎉 You’ve just joined the coolest newsletter around, straight from <strong>{userInfo.city}</strong>! <br />
					<br />
					We’re stoked to have you with us and can’t wait to share awesome updates, fun news, and exclusive goodies. <br />
					<br />
					Check out this special message from our team:
				</>
			),

			body2: (
				<>
					Thanks a bunch for subscribing!
					<br />
					<br />
					Got questions, or just wanna chat?
					<br />
					We’re here for you!
					<br />
					<br />
					Catch you soon
				</>
			),
		},
	];

	const [templateStyle, setTemplateStyle] = useState(templateEmailStyles[0]);

	const changeTemplateStyle = (e) => {
		templateEmailStyles.forEach((template) => {
			if (template.style === e.target.id) {
				setTemplateStyle(template);
			}
		});
		const siblingsBtn = Array.from(e.target.parentElement.children);
		siblingsBtn.forEach((btn) => {
			if (btn.id === e.target.id) {
				btn.classList.add(templateStyleCSS.active);
			} else {
				btn.classList.remove(templateStyleCSS.active);
			}
		});
	};

	return (
		<div className={templateStyleCSS.templateContainer}>
			<div className={templateStyleCSS.templateBtnsContainer}>
				<button className={templateStyleCSS.templateBtn} id='formal' onClick={(e) => changeTemplateStyle(e)}>
					Formal
				</button>
				<button className={templateStyleCSS.templateBtn} id='friendly' onClick={(e) => changeTemplateStyle(e)}>
					Friendly
				</button>
				<button className={templateStyleCSS.templateBtn} id='playful' onClick={(e) => changeTemplateStyle(e)}>
					Playful
				</button>
			</div>
			<div className={templateStyleCSS.templateEmail}>
				<h2>{templateStyle.title}</h2>
				<h4>{templateStyle.mittente}</h4>
				<h3>{templateStyle.subject}</h3>

				<p>{templateStyle.body1}</p>

				<p>
					<em className={templateStyleCSS.textareaMessage}>{userInfo.message}</em>
				</p>

				<p>{templateStyle.body2}</p>
			</div>
		</div>
	);
}

export { Template };
