import React from "react";
import { AppProvider } from '../../Context';
import { BrowserRouter, useLocation, useRoutes, } from "react-router-dom";

import './App.css'

import { Home } from '../Screens/Home';
import { Navbar } from "../components/NavBar";
import { NavBarResponsive } from "../components/NavBarResponsive";

const Wrapper = ({children}) => {
const location = useLocation();
React.useLayoutEffect(() => {
	document.documentElement.scrollTo(0, 0)
}, [location.pathname]);

return children;
}

const AppRoutes = () => {
	let routes = useRoutes([
		{path: "/", element: <Home/>},
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
				<AppRoutes/>
			</Wrapper>
		</BrowserRouter>
	</AppProvider>
);
}

export { App };
