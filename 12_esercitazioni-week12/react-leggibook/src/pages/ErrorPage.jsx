import React from "react";
import ErrorComponent from "../components/ErrorComponent";
import { Link, useRouteError } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();
	return (
		<ErrorComponent message={error.statusText || error.message}>
			<Link to='/' className='bg-green-500'>
				Go back Home
			</Link>
		</ErrorComponent>
	);
}

export default ErrorPage;
