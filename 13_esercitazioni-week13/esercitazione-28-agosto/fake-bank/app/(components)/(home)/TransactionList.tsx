import { ITransactionListProps } from "@/app/(models)/transactionInterface";
import Transaction from "./Transaction";

const TransactionList = (props: ITransactionListProps) => {
	const { transactions } = props;

	return (
		<div className='relative h-[calc(100vh-320px-10rem)] bg-white rounded-xl shadow-sm p-6'>
			<div className='h-[15%] mb-3'>
				<h2 className='font-bold text-lg mb-3'>Recent transactions</h2>
				{/* SEARCH */}
				<label className='p-2 bg-white rounded-xl input input-bordered flex items-center gap-2 border-gray-100 border-2 '>
					<input type='text' className='grow p-2 ' placeholder='Search' />
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='h-4 w-4 opacity-70'>
						<path fillRule='evenodd' d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z' clipRule='evenodd' />
					</svg>
				</label>
			</div>

			<ul role='list' className='h-[70%] overflow-y-scroll divide-y divide-gray-100 '>
				{transactions.slice(0, 6).map((transaction) => (
					<Transaction key={transaction._id} transaction={transaction} />
				))}
			</ul>

			<a href='/transactions' className='h-[15%] mt-3 flex justify-end items-center font-semibold transition-colors duration-200  hover:text-violet-400'>
				Go to Transactions
				<svg className='inline-block w-3 ml-2' fill='currentColor' viewBox='0 0 12 12'>
					<path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
				</svg>
			</a>
		</div>
	);
};

export default TransactionList;
