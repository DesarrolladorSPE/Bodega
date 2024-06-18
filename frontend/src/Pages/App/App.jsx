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
import { ConsolidadoScreen } from "../Screens/ConsolidadoScreen";
import { NavImagesCard } from "../components/NavImagesCard";
import { ConfirmationModal } from "../components/ConfirmationModal";

const Wrapper = ({children}) => {
	const location = useLocation();
	React.useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0)
	}, [location.pathname]);

	return children;
}

const AppRoutes = () => {
	const context = React.useContext(AppContext);
	const { isLoged, admin } = context;

	let routes = useRoutes([
		{path: "/*", element: isLoged ? <Home/> : <Navigate replace to={"/login"}/>},
		{path: "/home", element: isLoged ? <Home/> : <Navigate replace to={"/login"}/>},
		{path: "/consolidado", element: isLoged ? <ConsolidadoScreen/> : <Navigate replace to={"home"}/>},

		{path: "/login", element: isLoged ? <Home/> : <Login/>},
		{path: "/users", element: isLoged && admin ? <Users/> : <Navigate replace to={"home"}/>},

	]);

	return routes;
}


const App = () =>  {

return (
	<AppProvider>
		<HashRouter>
			<Wrapper>
				<GovNavbar/>
				<ConfirmationModal/>
				<MainContainer>
					<NavImagesCard/>
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
