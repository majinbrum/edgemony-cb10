"use client";

import { IType, ITypeProps } from "@/app/(models)/typeInterface";
import React, { SetStateAction } from "react";

const Button = (props: ITypeProps) => {
	const { type } = props;

	return (
		<button className='px-3 py-2 border-2 border-violet-200 rounded-2xl hover:bg-violet-200 ' aria-current='page'>
			{type.type}
		</button>
	);
};

export default Button;
