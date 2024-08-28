import React from "react";
import ErrorComponent from "../components/ErrorComponent";
import { Link, useRouteError } from "react-router-dom";
import { labels } from "../data/labels";

function ErrorPage() {
	const error = useRouteError();
	return (
		<ErrorComponent message={error.statusText || error.message}>
			<Link to='/' className='bg-green-500'>
				{labels.errorGoBack}
			</Link>
		</ErrorComponent>
	);
}

export default ErrorPage;
