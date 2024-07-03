import { useState } from "react";
import templateStyleCSS from "./Template.module.css";

function Template(props) {
	const { userInfo } = props;

	const templateEmailStyles = [
		{
			style: "formal",
			title: "Formal version",
			mittente: `To: <strong>${userInfo.email}</strong>`,
			subject: `Subject: Welcome to Our Newsletter, <strong>${userInfo.firstName}</strong>!`,

			body1: `
Dear ${userInfo.firstName} ${userInfo.lastName},
We are pleased to welcome you to our newsletter community.

Your subscription from ${userInfo.city} has been successfully processed, and we are delighted to have you with us. Our newsletter is designed to provide you with the most recent updates, news, and exclusive content pertinent to your interests.

Please find a special message from our team below:`,

			body2: `
Thank you for subscribing. 
Should you have any questions or require further assistance, do not hesitate to contact us. 
Warm regards`,
		},

		{
			style: "friendly",
			title: "Friendly version",
			mittente: `To: <strong>${userInfo.email}</strong>`,
			subject: `Subject: Welcome to Our Newsletter, <strong>${userInfo.firstName}</strong>!`,

			body1: `
Hi ${userInfo.firstName} ${userInfo.lastName},

Welcome aboard! We're super excited to have you join our newsletter family all the way from ${userInfo.city}.

We’ve got a ton of great stuff lined up just for you – from the latest updates to exclusive content that we think you’ll love.
Here’s a special message from our team:`,

			body2: `
Thanks for subscribing! 
If you ever have any questions or just want to say hi, don’t hesitate to reach out.
Best wishes`,
		},

		{
			style: "playful",
			title: "Playful version",
			mittente: `To: <strong>${userInfo.email}</strong>`,
			subject: `Subject:  Yay! Welcome, <strong>${userInfo.firstName}</strong>!`,

			body1: `
Hey ${userInfo.firstName} ${userInfo.lastName},
Hooray! 🎉 You’ve just joined the coolest newsletter around, straight from ${userInfo.city}!

We’re stoked to have you with us and can’t wait to share awesome updates, fun news, and exclusive goodies.
Check out this special message from our team:`,

			body2: `
Thanks a bunch for subscribing!
Got questions, or just wanna chat? We’re here for you!
Catch you soon`,
		},
	];

	const [templateStyle, setTemplateStyle] = useState(templateEmailStyles[0]);

	const changeTemplateStyle = (e) => {
		templateEmailStyles.forEach((template) => {
			if (template.style === e.target.id) {
				setTemplateStyle(template);
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
