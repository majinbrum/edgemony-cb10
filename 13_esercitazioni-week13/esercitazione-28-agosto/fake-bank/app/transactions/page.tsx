"use client";

import { getTransactions } from "@/action/get-transactions";
import { ITransaction } from "@/model/transaction";
import React, { startTransition, useEffect, useState, useTransition } from "react";

function Table() {
	const [transactions, setTransactions] = useState<ITransaction[] | null>(null);
	const [isPending, startTransition] = useTransition();

	// =========================
	const [categories, setCategories] = useState<string[]>([]);
	// *******************************

	const handleGetTransactions = async () => {
		startTransition(async () => {
			try {
				const data = await getTransactions();
				setTransactions(data);
			} catch (error: unknown) {
				const message = error instanceof Error ? error.message : "An error occurred while loading...";
				console.error(message);
			}
		});
	};

	useEffect(() => {
		handleGetTransactions();
	}, []);

	return (
		<>
			{isPending && <h1>is Pending...</h1>}
			{transactions && (
				<main className='p-12  h-screen flex gap-x-8 bg-gray-100'>
					{/* ASIDE */}
					<aside className=' flex flex-col justify-between w-1/4 min-w-64 max-w-80 px-4 py-8 overflow-y-auto bg-white shadow-sm rounded-xl border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'>
						<div className='flex flex-col items-center '>
							<img className='mb-4 ring ring-offset-8 ring-violet-400 ring-offset-gray-100 bg-emerald-400 object-cover w-24 h-24 mx-2 rounded-full' src='/images/Fry.png' alt='avatar' />
							<h4 className='font-bold text-gray-800 dark:text-gray-200'>Philip J. Fry</h4>
							<p className='text-sm font-medium text-gray-500 dark:text-gray-400'>Super User</p>
							<img src='/images/credit-card3.png' className='-rotate-90 max-h-72' alt='credit card' />
						</div>

						<div className='flex flex-col'>
							<nav>
								<a
									className='flex items-center px-4 py-2  rounded-lg text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
									href='/'>
									<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>

									<span className='mx-4 font-medium'>Dashboard</span>
								</a>

								<a className='flex items-center px-4 py-2 mt-5 text-gray-700 bg-gray-100  rounded-lg dark:bg-gray-800 dark:text-gray-200 ' href='#'>
									<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>

									<span className='mx-4 font-medium'>Transactions</span>
								</a>

								<a
									className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
									href='#'>
									<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path d='M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
									</svg>

									<span className='mx-4 font-medium'>Savings</span>
								</a>

								<a
									className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
									href='#'>
									<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>

									<span className='mx-4 font-medium'>Credit</span>
								</a>

								<a
									className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
									href='#'>
									<svg className='w-5 h-5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
										<path
											d='M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
										/>
									</svg>

									<span className='mx-4 font-medium'>Settings</span>
								</a>
							</nav>
						</div>
					</aside>

					<div className='w-3/4 min-w-fit lg:w-full overflow-y-auto bg-white px-6 rounded-xl shadow-sm'>
						<div className='overflow-x-auto'>
							<ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400'>
								<li className='me-2'>
									<a href='#' className='inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active' aria-current='page'>
										Tab 1
									</a>
								</li>
							</ul>

							<table className='table border-separate border-spacing-8'>
								{/* head */}
								<thead>
									<tr className='text-left'>
										<th className='font-semibold uppercase'>ID</th>
										<th className='font-semibold uppercase'>Transaction date</th>
										<th className='font-semibold uppercase'>Description</th>
										<th className='font-semibold uppercase'>Category</th>
										<th className='font-semibold uppercase'>Debit</th>
										<th className='font-semibold uppercase'>Credit</th>
										<th className='font-semibold uppercase'>Status</th>
									</tr>
								</thead>
								<tbody>
									{/* row 1 */}
									{transactions.map((transaction) => (
										<tr>
											{/* <div className='avatar'>
												<div className='mask mask-squircle h-12 w-12'>
													<img src='https://img.daisyui.com/images/profile/demo/2@94.webp' alt='Avatar Tailwind CSS Component' />
												</div>
												</div> */}

											<td>#{transaction.id}</td>
											<td>{transaction.transactionDate}</td>
											<td className='font-bold'>{transaction.description}</td>
											<td className='inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider bg-violet-200 uppercase rounded-full '>{transaction.category}</td>

											{transaction.debit && (
												<>
													<td className='font-bold text-center'>${transaction.debit} </td>
													<td className=' text-center'>0</td>
													<svg
														className='h-5 w-5 text-emerald-400'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														strokeWidth='1'
														stroke='currentColor'
														fill='none'
														strokeLinecap='round'
														strokeLinejoin='round'>
														<path stroke='none' d='M0 0h24v24H0z' /> <path d='M7 12l5 5l10 -10' /> <path d='M2 12l5 5m5 -5l5 -5' />
													</svg>
												</>
											)}

											{transaction.credit && (
												<>
													<td className=' text-center'>0</td>
													<td className='font-bold text-center'>${transaction.credit} </td>
													<svg
														className='h-5 w-5 text-gray-400'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														strokeWidth='2'
														stroke='currentColor'
														fill='none'
														strokeLinecap='round'
														strokeLinejoin='round'>
														<path stroke='none' d='M0 0h24v24H0z' /> <circle cx='12' cy='12' r='9' /> <polyline points='12 7 12 12 15 15' />
													</svg>
												</>
											)}
										</tr>
									))}
								</tbody>
								{/* foot */}
								<tfoot>
									<tr className='text-left'>
										<th>ID</th>
										<th>Transaction date</th>
										<th>Description</th>
										<th>Category</th>
										<th>Debit</th>
										<th>Credit</th>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</main>
			)}
		</>
	);
}

export default Table;
