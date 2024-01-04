import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { routesConfig } from "./App.routes";

test("full app rendering and navigation", async () => {
	const router = createMemoryRouter(routesConfig, {
		initialEntries: ["/storial"],
	});
	render(<RouterProvider router={router} />);
	const user = userEvent.setup();

	//verify page content for default router
	expect(screen.getByText(/Track Books To Read Next!/i)).toBeInTheDocument();

	// //verify page content for /books/list route
	await user.click(screen.getByText(/view library/i));
	expect(await screen.findByText(/library/i)).toBeInTheDocument();

	// //verify page content for /books/create route
	await user.click(screen.getByText(/quick add book/i));
	expect(await screen.findByText(/add book/i)).toBeInTheDocument();

	// //verify page content for /books/update/:id route
	// await user.click(screen.getByText(/edit/i));
	// expect(await screen.findByText(/edit book/i)).toBeInTheDocument();

	// //verify page content for / route
	user.click(screen.getByText(/home/i));
	expect(
		await screen.findByText(/Track Books To Read Next!/i)
	).toBeInTheDocument();
});
