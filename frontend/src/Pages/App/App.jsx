import React from "react";
import { AppContext, AppProvider } from '../../Context';
import { BrowserRouter, useLocation, Navigate, useRoutes, } from "react-router-dom";

import './App.css'

import { Home } from '../Screens/Home';
import { Login } from "../Screens/Login";

import { Navbar } from "../components/NavBar";
import { NavBarResponsive } from "../components/NavBarResponsive";
import { Footer } from "../components/Footer";
import { MainContainer } from "../components/MainContainer";
import { LoadingCard } from "../components/LoadingCard";

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

	]);

	return routes;
}


const App = () =>  {

return (
	<AppProvider>
		<BrowserRouter>
			<Wrapper>
				<Navbar/>
				<NavBarResponsive/>
				<MainContainer>
					<AppRoutes/>
				</MainContainer>
				<LoadingCard/>
				<Footer/>
			</Wrapper>
		</BrowserRouter>
	</AppProvider>
);
}

export { App };
