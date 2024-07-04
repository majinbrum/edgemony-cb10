import { useState } from "react";
import templateStyleCSS from "./Template.module.css";
import { TemplateFormal } from "./TemplateFormal.jsx";
import { TemplateFriendly } from "./TemplateFriendly.jsx";
import { TemplatePlayful } from "./TemplatePlayful.jsx";

function Template(props) {
	const { userInfo } = props;

	// const templateEmailStyles = {
	// 	formal: <TemplateFormal userInfo={userInfo} />,
	// 	friendly: <TemplateFriendly userInfo={userInfo} />,
	// 	playful: <TemplatePlayful userInfo={userInfo} />,
	// };

	const [templateStyle, setTemplateStyle] = useState("formal");

	const changeTemplateStyle = (e) => {
		setTemplateStyle(e.target.id);

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
				<button className={`${templateStyleCSS.templateBtn} ${templateStyleCSS.active}`} id='formal' onClick={(e) => changeTemplateStyle(e)}>
					Formal
				</button>
				<button className={templateStyleCSS.templateBtn} id='friendly' onClick={(e) => changeTemplateStyle(e)}>
					Friendly
				</button>
				<button className={templateStyleCSS.templateBtn} id='playful' onClick={(e) => changeTemplateStyle(e)}>
					Playful
				</button>
			</div>
			{templateStyle === "formal" && <TemplateFormal userInfo={userInfo} />}
			{templateStyle === "friendly" && <TemplateFriendly userInfo={userInfo} />}
			{templateStyle === "playful" && <TemplatePlayful userInfo={userInfo} />}
		</div>
	);
}

export { Template };
