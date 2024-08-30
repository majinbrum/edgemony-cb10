import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({
		title: "Def-Con Owl Traps",
		category: "Pest Control",
		description: "Traps for the wild spotted owls which have replaced rats as the #1 infestation in New New York.",
		slogan: "Kills owls dead",
		price: 309.29,
		stock: 5,
		id: 1,
	});
}
