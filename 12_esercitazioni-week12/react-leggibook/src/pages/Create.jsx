import React, { useState } from "react";
import { addBook } from "../api/bookClient";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";

function Create() {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState({ message: "", error: false });

	const handleSubmit = async (value) => {
		try {
			setIsLoading(true);
			const res = await addBook(value);
			console.log(res);
			navigate("/");
		} catch (error) {
			console.error(error);
			setHasError((prevState) => {
				return { ...prevState, message: error.message, error: true };
			});
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) return <p>is loading...</p>;

	return (
		<div>
			<div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-lg'>
					<h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>Insert the book here</h1>
					<p className='mx-auto mt-4 max-w-md text-center text-gray-500'>Insert title, author, genre, isbn, description</p>
					<BookForm onSubmit={handleSubmit} hasError={hasError} />
					{/* <form onSubmit={handleSubmit} action='#' className='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'>
						<div>
							<label className='sr-only'>Title</label>
							<div className='relative'>
								<input name='title' onChange={handleChange} type='text' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' placeholder='Enter title' />
							</div>
						</div>
						<div>
							<label className='sr-only'>Author</label>
							<div className='relative'>
								<input name='author' onChange={handleChange} type='text' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' placeholder='Enter author' />
							</div>
						</div>
						<div>
							<label className='sr-only'>ISBN</label>
							<div className='relative'>
								<input name='isbn' onChange={handleChange} type='text' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' placeholder='Enter isbn' />
							</div>
						</div>
						<div>
							<label className='sr-only'>Genres</label>
							<div className='relative'>
								<input name='genres' onChange={handleChange} type='text' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' placeholder='Enter genres' />
							</div>
						</div>
						<div>
							<label className='sr-only'>Description</label>
							<div className='relative'>
								<input name='description' onChange={handleChange} type='text' className='w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm' placeholder='Enter description' />
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
					</form> */}
				</div>
			</div>
		</div>
	);
}

export default Create;
