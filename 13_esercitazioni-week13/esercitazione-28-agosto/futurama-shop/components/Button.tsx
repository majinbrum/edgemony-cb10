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
			className='mt-1 text-green-700  ring-1 ring-inset ring-green-600/20 hover:bg-green-50 focus:ring-2 focus:outline-none focus:ring-green-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-green-600/20 dark:hover:bg-green-600/30 dark:focus:ring-green-600/50'>
			<svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 21'>
				<path d='M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z' />
			</svg>
			<span className='sr-only'>Add to cart</span>
		</button>
	);
}

export default Button;
