import { getTypes } from "@/action/get-types";
import { getTransactions } from "@/action/get-transactions";
import TableRow from "@/app/(components)/(transactions)/TableRow";
import Button from "@/app/(components)/(transactions)/Button";

const TransactionsTable = async () => {
	const transactions = await getTransactions();
	const types = await getTypes();

	const tableTh = [
		"Transaction date",
		"Description",
		"Category",
		"Type",
		"Amount",
		// "Status"
	];

	return (
		<>
			<div className='p-6 w-3/4 min-w-fit lg:w-full overflow-y-auto bg-white px-6 rounded-xl shadow-sm'>
				<div className='overflow-x-auto'>
					<ul className='flex justify-center gap-x-4 flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
						{types.map((type) => {
							return <Button key={type._id} type={type} />;
						})}
					</ul>

					<table className='table border-separate border-spacing-8 w-full'>
						{/* head */}
						<thead>
							<tr className='text-left'>
								{tableTh.map((th) => {
									return <th className='font-semibold uppercase'>{th}</th>;
								})}
								<th className='font-semibold uppercase text-center'>Status</th>
							</tr>
						</thead>
						<tbody>
							{/* row 1 */}
							{transactions.map((transaction) => (
								<TableRow key={transaction._id} transaction={transaction} />
							))}
						</tbody>
						{/* foot */}
						<tfoot>
							<tr className='text-left'>
								{tableTh.map((th) => {
									return <th className='font-semibold uppercase'>{th}</th>;
								})}
								<th className='font-semibold uppercase text-center'>Status</th>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
		</>
	);
};

export default TransactionsTable;
