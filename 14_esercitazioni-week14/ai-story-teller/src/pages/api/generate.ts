import { GoogleGenerativeAI, GenerateContentCandidate } from "@google/generative-ai";
import type { NextApiRequest, NextApiResponse } from "next";

interface BodyI {
	prompt: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
	if (req.method === "POST") {
		const { prompt } = req.body as BodyI;

		if (!prompt) {
			res.status(400).json("Missing body.");
		}

		try {
			if (process.env.NEXT_PUBLIC_GEMINI_KEY) {
				const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_KEY);
				const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
				const result = await model.generateContent(prompt);
				console.log(result);
				const output = (result.response.candidates as GenerateContentCandidate[])[0].content.parts[0].text;

				if (output) {
					res.status(200).json(output);
				}
			} else {
				// res.status(400).json("API KEY missing.");
				const output =
					"Roger Rabbit was a very nervous rabbit. He loved painting, but he was too shy to show anyone his work. He always dreamed of winning the annual 'Best Bunny Art' competition, but he was afraid his paintings weren't good enough. He especially worried about what Jessica Rabbit, the coolest bunny in school, would think. Jessica was known for her sharp wit and stunning artwork, and Roger secretly admired her. One day, Roger saw Jessica struggling with her painting. She was trying to capture the vibrant colors of a sunset, but her paints seemed to be missing their usual spark. Roger, overcome by a surge of courage, approached her. 'Maybe I can help?'' he offered, nervously clutching his own paintbrush. Jessica, surprised by his kindness, agreed. As they worked together, Roger felt a spark of confidence. Jessica's tips on blending colors and capturing light were brilliant, and Roger, in turn, shared his unique perspective on the subject. As they talked, Roger realized he wasn't as intimidated by Jessica as he thought. She was funny, kind, and genuinely interested in his work. By the end of the day, they had created a stunning piece of art together, capturing the sunset in all its glory. They both agreed it was their best work yet. When the annual competition arrived, Roger and Jessica stood side by side, their collaborative painting on display. They were nervous, but they also felt proud of their creation. The judges, impressed by the painting's vibrancy and unique perspective, awarded it first place. Roger and Jessica, beaming with joy, accepted the prize together. From that day on, Roger and Jessica became the best of friends, their shared passion for art bringing them closer. They even started a small art club, sharing their talents and encouraging other bunnies to express themselves. And while Roger never confessed his feelings for Jessica, he knew that their friendship, forged over a shared love of art, was the most beautiful thing he had ever created.";
				res.status(200).json(output);
			}
		} catch (e) {
			res.status(400).json("Error generating story.");
		}
	} else {
		res.status(405).json("Method not allowed. Only POST requests are allowed.");
	}
}
