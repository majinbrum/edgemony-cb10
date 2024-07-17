import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// COMPONENTS
import DefaultLayout from "./components/DefaultLayout.jsx";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";

// CSS
import "./index.css";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		errorElement: <ErrorPage />,
// 	},
// 	{
// 		path: "about",
// 		element: <About />,
// 	},
// 	{
// 		path: "contacts",
// 		element: <Contacts />,
// 	},
// ]);

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
				path: "about",
				element: <About />,
			},
			{
				path: "contacts",
				element: <Contacts />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <App /> */}
		<RouterProvider router={router} />
	</React.StrictMode>
);
