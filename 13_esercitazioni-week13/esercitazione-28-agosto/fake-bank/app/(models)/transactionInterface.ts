export interface ITransaction {
	_id: string;
	transactionDate: string;
	description: string;
	category: string;
	amount: number;
	type: string;
}

export interface ITransactionProps {
	transaction: ITransaction;
}

export interface ITransactionListProps {
	transactions: ITransaction[];
}
