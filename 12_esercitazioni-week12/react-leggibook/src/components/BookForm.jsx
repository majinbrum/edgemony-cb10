import { useEffect, useState } from "react";

function BookForm({ value, onSubmit, hasError }) {
	const initialState = {
		title: value?.title || "",
		author: value?.author || "",
		isbn: value?.isbn || "",
		genre: value?.genre || "",
		description: value?.description || "",
	};

	const [form, setForm] = useState(initialState);
	const [isLoading, setIsLoading] = useState(false);

	const titleValidation = !form.title.length;
	const authorValidation = !form.author.length;
	const genreValidation = !form.genre.length;
	const descriptionValidation = !form.description.length;
	const isbnValidation = !form.isbn.length;

	const formValidation = titleValidation || authorValidation || genreValidation || descriptionValidation || isbnValidation;

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setForm((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	useEffect(() => {
		console.log(form);
	}, [form]);

	return (
		// <div>
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				setIsLoading(true);
				await onSubmit(form);
				setIsLoading(false);
			}}
			action='#'
			className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'>
			<div>
				<label className='sr-only'>Title</label>
				<div className='relative'>
					<input name='title' onChange={handleChange} type='text' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' placeholder='Enter title' value={form.title} />
				</div>
			</div>
			<div>
				<label className='sr-only'>Author</label>
				<div className='relative'>
					<input name='author' onChange={handleChange} type='text' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' placeholder='Enter author' value={form.author} />
				</div>
			</div>
			<div>
				<label className='sr-only'>ISBN</label>
				<div className='relative'>
					<input name='isbn' onChange={handleChange} type='text' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' placeholder='Enter isbn' value={form.isbn} />
				</div>
			</div>
			<div>
				<label className='sr-only'>Genre</label>
				<div className='relative'>
					<input name='genre' onChange={handleChange} type='text' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' placeholder='Enter genre' value={form.genre} />
				</div>
			</div>
			<div>
				<label className='sr-only'>Description</label>
				<div className='relative'>
					<input
						name='description'
						onChange={handleChange}
						type='text'
						className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm'
						placeholder='Enter description'
						value={form.description}
					/>
				</div>
			</div>

			{hasError.error && (
				<div role='alert' className='rounded border-s-4 border-red-500 bg-red-50 p-4'>
					<strong className='block font-medium text-red-800'>Something went wrong</strong>
					<p className='mt-2 text-sm text-red-700'>{hasError.message}</p>
				</div>
			)}

			<button
				type='submit'
				className={`block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white ${isLoading || (formValidation && "bg-slate-400")}`}
				disabled={isLoading || (formValidation && true)}>
				{isLoading ? "Submitting..." : "Submit"}
			</button>
		</form>
		// </div>
	);
}

export default BookForm;
