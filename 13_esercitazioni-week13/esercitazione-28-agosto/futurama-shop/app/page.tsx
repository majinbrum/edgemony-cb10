// import { getItem } from "@/action/get-item";
import { getInventory } from "@/action/getInventory";
import Button from "@/components/Button";

export default async function Home() {
	// const item = await getItem();
	const inventory = await getInventory();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-8 sm:text-6xl'>Futurama inventory</h1>
					<h2 className='sr-only'>Products</h2>

					<div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
						{inventory.map((item) => (
							<div key={item.id} className='group'>
								<span className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-2'>{item.category}</span>
								<h2 className='font-bold text-lg text-gray-700'>{item.title}</h2>
								<p className='text-md italic text-gray-900/75 underline dark:text-white decoration-sky-500 decoration-wavy mb-2'>{item.slogan}</p>
								<h3 className=' text-sm text-gray-700'>{item.description}</h3>
								<div className='flex justify-between items-center mt-2'>
									<span className='flex flex-col justify-between '>
										<p className='mt-1 text-lg font-semibold text-gray-900'>{item.price}$</p>
										<p className='mt-1 text-sm text-gray-400'>In stock: {item.stock}</p>
									</span>
									<Button />
								</div>
							</div>
							// </a>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
