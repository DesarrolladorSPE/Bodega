import React from "react";
import { AppContext, AppProvider } from '../../Context';
import { useLocation, Navigate, useRoutes, HashRouter, } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import { Home } from '../Screens/Home';
import { Login } from "../Screens/Login";

import { GovNavbar } from "../components/GovNavbars";
import { Footer } from "../components/Footer";

import { MainContainer } from "../components/MainContainer";
import { LoadingCard } from "../components/LoadingCard";
import { Users } from "../Screens/Users";
import { NavButtons } from "../components/NavButtons";
import { ToastContainer } from "react-toastify";

const Wrapper = ({children}) => {
	const location = useLocation();
	React.useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0)
	}, [location.pathname]);

	return children;
}

const AppRoutes = () => {
	const context = React.useContext(AppContext);

	let routes = useRoutes([
		{path: "/", element: context.isLoged ? <Home/> : <Navigate replace to={"/login"}/> },
		{path: "/home", element: context.isLoged ? <Home/> : <Navigate replace to={"/login"}/>},
		{path: "/*", element: context.isLoged ? <Home/> : <Navigate replace to={"/login"}/>},

		{path: "/login", element: context.isLoged ? <Home/> : <Login/>},
		{path: "/users", element: context.isLoged && context.admin ? <Users/> : <Navigate replace to={"home"}/>},

	]);

	return routes;
}


const App = () =>  {

return (
	<AppProvider>
		<HashRouter>
			<Wrapper>
				<GovNavbar/>
				<MainContainer>
					<NavButtons/>
					<AppRoutes/>
				</MainContainer>
				<LoadingCard/>
				<Footer/>
				<ToastContainer/>
			</Wrapper>
		</HashRouter>
	</AppProvider>
);
}

export { App };
