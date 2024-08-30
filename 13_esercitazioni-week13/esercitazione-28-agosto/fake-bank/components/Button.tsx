"use client";

import Toast from "typescript-toastify";

function showToast() {
	const toast = new Toast({
		position: "top-right",
		toastMsg: "💡 Good news, everyone!",
		autoCloseTime: 2000,
		canClose: true,
		showProgress: true,
		pauseOnHover: true,
		pauseOnFocusLoss: true,
		type: "default",
		theme: "light",
	});

	return toast;
}

function Button() {
	return (
		<button
			onClick={showToast}
			type='button'
			className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
			Messages
			<span className='inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-green-800 bg-green-200 rounded-full'>1</span>
		</button>
	);
}

export default Button;
