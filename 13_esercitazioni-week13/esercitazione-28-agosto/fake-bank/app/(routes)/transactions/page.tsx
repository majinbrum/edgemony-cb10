import { getTransactions, getTransactionsByType } from "@/action/get-transactions";
import Table from "@/app/(components)/(transactions)/Table";
import TableContainer from "@/app/(components)/(transactions)/TableContainer";
import NotFound from "../not-found";

interface ITypeProp {
	type: string;
}

const TransactionsTable = async ({ type }: ITypeProp) => {
	const transactions = type ? await getTransactionsByType(type) : await getTransactions();

	if (transactions.length < 1) return <NotFound />;
	return (
		<>
			<TableContainer>
				<Table transactions={transactions} />
			</TableContainer>
		</>
	);
};

export default TransactionsTable;
