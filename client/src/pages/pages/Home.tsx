import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Home as HomeContent, Login, Logout, Signup, Spinner } from "../../components";
import { getCookie } from "../../util";
import { useAppSelector } from "../../hooks";
import { authThunks } from "../../redux/thunks";
import { IUser } from "../../types";
import { AppDispatch } from "../../redux/store";

export const Home = () => {
	const [loginStatusLoaded, setloginStatusLoaded] = useState<boolean>()
	const authState = useAppSelector((state) => state.auth.auth);
	const { isAuthenticated, isRegistered } = authState;
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (getCookie("keepLoggedIn")) {
			const payload: IUser = {
				username: getCookie("userName") as string,
				password: getCookie("password") as string,
				email: getCookie("email") as string,
			};
			dispatch(authThunks.loginUser(payload));
		}
	}, [dispatch]);

	useEffect(() => {
		if (isAuthenticated === undefined || isRegistered === undefined) {
			setloginStatusLoaded(false)
		}
		if (isAuthenticated !== undefined && isRegistered !== undefined) {
			setloginStatusLoaded(true)
		}
	}, [isAuthenticated, isRegistered])

	return (
		<div className='page-container'>
			{!loginStatusLoaded && 
					<Spinner />
			}
			{loginStatusLoaded &&
				<>
					{isAuthenticated && (
						<>
							<Logout />
							<HomeContent />
						</>
					)}
					{isAuthenticated === false && isRegistered === false && <Signup />}
					{isAuthenticated === false && isRegistered && <Login />}
				</>
			}
		</div>
	);
};
