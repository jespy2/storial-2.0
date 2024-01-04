import { Home, Library, NotFound } from "./pages";

export const routesConfig = [
	{
		errorElement: <NotFound />,
		children: [
			{ path: "/storial", element: <Home /> },
			{ path: "/storial/books/list", element: <Library /> },
		],
	},
];
