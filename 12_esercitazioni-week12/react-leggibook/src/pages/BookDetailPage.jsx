import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookDetail } from "../api/bookClient";
import ErrorComponent from "../components/ErrorComponent";

function BookDetailPage() {
	const { id } = useParams();
	const [book, setBook] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState({ message: "", error: false });

	const getBook = async (id) => {
		try {
			const data = await getBookDetail(id);
			setBook(data);
		} catch (error) {
			console.error("Error: ", error);
			setHasError((prevState) => {
				return { ...prevState, message: error.message, error: true };
			});
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getBook(id);
	}, []);

	if (hasError.error) return <ErrorComponent />;

	// if (isLoading) return <p>Loading...</p>;

	return (
		<div className='relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0'>
			<div className='absolute inset-0 -z-10 overflow-hidden'>
				<svg
					aria-hidden='true'
					className='absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]'>
					<defs>
						<pattern x='50%' y={-1} id='e813992c-7d03-4cc4-a2bd-151760b470a0' width={200} height={200} patternUnits='userSpaceOnUse'>
							<path d='M100 200V.5M.5 .5H200' fill='none' />
						</pattern>
					</defs>
					<svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
						<path d='M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z' strokeWidth={0} />
					</svg>
					<rect fill='url(#e813992c-7d03-4cc4-a2bd-151760b470a0)' width='100%' height='100%' strokeWidth={0} />
				</svg>
			</div>
			<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
				<div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
					<div className='lg:pr-4'>
						<div className='lg:max-w-lg'>
							{isLoading ? (
								<div className='animate-pulse'>
									<div className='h-4 bg-gray-300 rounded w-3/4'></div>
									<div className='h-8 bg-gray-300 rounded mt-2 w-full'></div>
									<div className='h-4 bg-gray-300 rounded mt-6 w-full'></div>
									<div className='h-4 bg-gray-300 rounded mt-2 w-3/12'></div>
								</div>
							) : (
								<>
									<p className='text-base font-semibold leading-7 text-indigo-600'>{book.author}</p>
									<h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>{book.title}</h1>
									<p className='mt-6 text-xl leading-8 text-gray-700'>{book.description}</p>
									<div className='mt-2'>
										{book.genres.map((genre, index) => {
											return (
												<span key={index} className='bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400'>
													{genre}
												</span>
											);
										})}
									</div>
								</>
							)}
						</div>
					</div>
				</div>
				<div className='-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
					{isLoading ? (
						<div className='w-[48rem] max-w-none rounded-xl bg-gray-300 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-64 animate-pulse'></div>
					) : (
						<img alt='' src={book.cover} className='w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]' />
					)}
				</div>
			</div>
		</div>
	);
}

export default BookDetailPage;
