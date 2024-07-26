import React, { useState } from "react";
import { addBook } from "../api/bookClient";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";

function Create() {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState({ message: "", error: false });

	const handleCreate = async (body) => {
		try {
			setIsLoading(true);
			const res = await addBook(body);
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
					<BookForm onSubmit={handleCreate} hasError={hasError} />
				</div>
			</div>
		</div>
	);
}

export default Create;
