import TransactionsTable from "../page";

interface IByTypeProps {
	params: { type: string };
}

const TransactionsByType = async ({ params }: IByTypeProps) => {
	const { type } = params;

	return <TransactionsTable type={type} />;
};

export default TransactionsByType;
