import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Home as HomeContent, Login, Logout, Signup, Spinner } from "../../components";
import { getCookie } from "../../util";
import { useAppSelector } from "../../hooks";
import { authThunks } from "../../redux/thunks";
import { IUser } from "../../types";
import { AppDispatch } from "../../redux/store";
import { logUserOut } from "../../redux/slices";

export const Home = () => {
	const authState = useAppSelector((state) => state.auth.auth);
	const { isLoggedIn, isRegistered } = authState;
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		setTimeout(() => {console.log('authState', authState)}, 5000)
		if (getCookie("keepLoggedIn")) {
			const payload: IUser = {
				username: getCookie("userName") as string,
				password: getCookie("password") as string,
				email: getCookie("email") as string,
			};
			dispatch(authThunks.loginUser(payload));
		} else dispatch(logUserOut());
		console.log('2nd authState', authState)
	}, []);

	return (
		<div className='page-container'>
			{isLoggedIn === undefined && 
				<Spinner />
			}
			{isLoggedIn && (
				<>
					<Logout />
					<HomeContent />
				</>
			)}
			{isLoggedIn === false &&
				<>
				{!isRegistered && <Signup />}
				{(isRegistered) && <Login />}
				</>
			}
		</div>
	);
};
