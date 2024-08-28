import { IItem } from "@/model/item";

// specifichiamo il type del return
export const getItem = async (): Promise<IItem> => {
	try {
		const res = await fetch("https://api.sampleapis.com/futurama/inventory/1");
		const data = await res.json();
		return data;
	} catch (error: any) {
		throw Error(error.message);
	}
};