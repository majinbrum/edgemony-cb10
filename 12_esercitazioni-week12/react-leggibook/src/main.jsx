import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import DefaultLayout from "./layouts/DefaultLayout.jsx";
import BookDetailPage from "./pages/BookDetailPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "books/:id",
				element: <BookDetailPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
