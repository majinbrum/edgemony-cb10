"use client";

import { getItem } from "@/action/get-item";
import { IItem } from "@/model/item";
import React, { startTransition, useEffect, useState, useTransition } from "react";

function Item() {
	const [item, setItem] = useState<IItem | null>(null);
	const [isPending, startTransition] = useTransition();

	const handleGetItem = async () => {
		startTransition(async () => {
			try {
				const data = await getItem();
				setItem(data);
			} catch (error: unknown) {
				const message = error instanceof Error ? error.message : "An error occurred while loading...";
				console.error(message);
			}
		});
	};

	useEffect(() => {
		handleGetItem();
	}, []);

	return (
		<div>
			{isPending && <h1>is Pending...</h1>}
			<div>{item?.title}</div>
		</div>
	);
}

export default Item;
