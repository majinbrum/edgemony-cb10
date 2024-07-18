import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// COMPONENTS
import Default from "./components/Default/Default.jsx";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import ProductPage from "./pages/ProductPage/ProductPage.jsx";
import Cart from "./pages/Cart/Cart.jsx";

// CSS
import "./style.module.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Default />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "product/:id",
				element: <ProductPage />,
			},
			{
				path: "cart",
				element: <Cart />,
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
