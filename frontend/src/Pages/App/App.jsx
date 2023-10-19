import { AppProvider } from '../../Context';
import { BrowserRouter, useRoutes, } from "react-router-dom";

import './App.css'
import { Home } from '../Screens/Home';

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
			<AppRoutes/>
			</Wrapper>
		</BrowserRouter>
	</AppProvider>
);
}

export { App };
