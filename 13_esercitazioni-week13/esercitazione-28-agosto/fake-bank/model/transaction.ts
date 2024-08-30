export interface ITransaction {
	transactionDate: string;
	description: string;
	category: string;
	debit?: number;
	credit?: number;
	id: number;
}
