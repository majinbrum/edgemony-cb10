// import { getItem } from "@/action/get-item";
import Balance from "../(components)/(home)/Balance";
import Savings from "../(components)/(home)/Savings";
import TransactionList from "../(components)/(home)/TransactionList";
import { getTransactions } from "@/action/get-transactions";

export default async function Home() {
	const transactions = await getTransactions();

	return (
		<>
			<div className='flex flex-col gap-y-8 w-3/4 min-w-fit lg:w-full'>
				<Balance transactions={transactions} />
				<TransactionList transactions={transactions} />
				<Savings transactions={transactions} />
			</div>
		</>
	);
}
