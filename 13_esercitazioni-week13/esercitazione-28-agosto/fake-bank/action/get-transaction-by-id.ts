import { ITransaction } from "@/model/transaction";

// specifichiamo il type del return
export const getTransactionById = async (): Promise<ITransaction> => {
	try {
		const res = await fetch("https://api.sampleapis.com/fakebank/accounts/1");
		const data = await res.json();
		return data;
	} catch (error: any) {
		throw Error(error.message);
	}
};
