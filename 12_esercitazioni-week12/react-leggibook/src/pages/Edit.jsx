import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editBook, getBookDetail } from "../api/bookClient";
import BookForm from "../components/BookForm";

function Edit() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [book, setBook] = useState(null);
	const [hasError, setHasError] = useState({ message: "", error: false });
	const [isLoading, setIsLoading] = useState(true);

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

	const handleSubmit = async (value) => {
		try {
			const res = await editBook({ ...value, id });
			console.log(res);
			navigate("/");
		} catch (error) {
			console.error(error);
			setHasError((prevState) => {
				return { ...prevState, message: error.message, error: true };
			});
		}
	};

	if (isLoading) return <p>is loading...</p>;

	return (
		<div>
			<div className='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-lg'>
					<h1 className='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>Edit the book here</h1>
					<p className='mx-auto mt-4 max-w-md text-center text-gray-500'>Insert title, author, genres, isbn, description</p>
					<BookForm value={book} onSubmit={handleSubmit} hasError={hasError} />
				</div>
			</div>
		</div>
	);
}

export default Edit;
