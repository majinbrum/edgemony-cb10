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
				res.status(400).json("API KEY missing.");
			}
		} catch (e) {
			res.status(400).json("Error generating story.");
		}
	} else {
		res.status(405).json("Method not allowed. Only POST requests are allowed.");
	}
}
