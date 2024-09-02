"use client";

import { ITypeProps } from "@/app/(models)/typeInterface";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Button = (props: ITypeProps) => {
	const pathname = usePathname();

	const { type } = props;
	const url = type.type == "all" ? "/transactions" : `/transactions/${type.type}`;

	const classes = [
		"flex items-center gap-x-2 px-4 py-2 rounded-2xl bg-gray-100 font-bold  transition-opacity duration-300 transform",
		pathname.includes(type.type) || (pathname.endsWith("transactions") && type.type === "all") ? "hover:opacity-50" : "opacity-50 hover:opacity-100",
	].join(" ");

	const incomeIcon = (
		<svg className='h-6 w-6 text-emerald-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z' />
		</svg>
	);

	const expensesIcon = (
		<svg className='h-6 w-6 text-red-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z' />
		</svg>
	);

	return (
		<Link href={url} className={classes} aria-current='page'>
			{type.type === "income" && incomeIcon}
			{(type.type === "debit" || type.type === "credit") && expensesIcon}
			{type.type.charAt(0).toUpperCase() + type.type.slice(1)}
		</Link>
	);
};

export default Button;
