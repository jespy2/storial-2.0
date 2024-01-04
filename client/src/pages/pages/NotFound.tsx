import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../hooks";
import { Header } from "../../components";
export const NotFound = () => {
	const navigate = useNavigate();
	const authState = useAppSelector((state) => state.auth.auth);
	const { isAuthenticated } = authState;

	React.useEffect(() => {
		if (!isAuthenticated) {
			navigate("/storial");
		}
	});

	return (
		<main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
			<Header title='Bummer!  That page could not be found...' />
			<Link to='/storial'>
				<button className='standard-btn'>Take me home!</button>
			</Link>
		</main>
	);
};
