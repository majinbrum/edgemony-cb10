import { ITransactionListProps } from "@/app/(models)/transactionInterface";

const Savings = (props: ITransactionListProps) => {
	const { transactions } = props;

	const savingsArray = transactions.filter((transaction) => transaction.category == "Savings");
	const savingsAmount = savingsArray.reduce((sum, transaction) => sum + transaction.amount, 0).toFixed(2);

	return (
		<div className='h-auto bg-white p-6 rounded-xl shadow-sm'>
			<h2 className='font-bold text-lg mb-3'>Savings</h2>
			<span className='font-semibold text-5xl '>${savingsAmount}</span>
			<a href='#' className='flex justify-end items-center font-semibold transition-colors duration-200  hover:text-violet-400'>
				Go to Savings
				<svg className='inline-block w-3 ml-2' fill='currentColor' viewBox='0 0 12 12'>
					<path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
				</svg>
			</a>
		</div>
	);
};

export default Savings;
