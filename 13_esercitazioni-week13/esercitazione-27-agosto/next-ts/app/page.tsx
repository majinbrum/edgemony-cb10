import Card, { IPost } from "@/components/Card";

const blogpost: IPost = {
	id: "39392",
	category: "pippo",
	title: "pluto",
	description: "topolino",
	author: {
		imageUrl: "dddd",
		name: "paperino",
		role: "ciao",
	},
};

export default function Home() {
	return (
		<main>
			<h1>hello, next</h1>
			<Card post={blogpost} />
		</main>
	);
}
