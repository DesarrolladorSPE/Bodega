import React from "react";

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
	//API -- Cambiar el valor de la variable api segun la infraestructura de produccion
	const api = "http://localhost:3080/api/v1";

	//-------------------------------------
    const [apiUri, setApiUri] = React.useState(api);

    //ADMIN
    const [admin, setAdmin] = React.useState(false);
	//Data, loading, Error
    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(false);

    const [error, setError] = React.useState(false);
	const [allOk, setAllOk] = React.useState(false);

    const [statusMessage, setStatusMessage] = React.useState("");


	const messageHandler = (type, message) => {
		if(type === "error") {
			let errorMessage = `Ocurrio un error: ${message}`;
			setStatusMessage(errorMessage);
			setError(true);
			setTimeout(() => {
				setError(false);
				setStatusMessage("");
			}, 6000)
		} else if (type === "all-ok") {
			setStatusMessage(message);
			setAllOk(true);
			setTimeout(() => {
				setAllOk(false);
				setStatusMessage("");
			}, 4000)
		}

	}

	// Screen width manager
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    const [toggleNavBarResponsive, setToggleNavBarResponsive] = React.useState(false);



    const [options, setOptions] = React.useState({});
    React.useEffect(() => {
		setLoading(true)
        const fetchData = async () =>{
            try{
                const response = await fetch(`${apiUri}/fuentes`);
                const data = await response.json();
                setOptions(data);
            }
            catch (err){
                alert(err)
            }
        }
        fetchData();
		setLoading(false);
    }, []);

    //Login
    const [ isLoged, setIsLoged ] = React.useState(false);

	const closeSession = () => {
		setAdmin(false);
		setIsLoged(false);

		messageHandler("all-ok", "Sesión cerrada correctamente")
	}

    //USERS
    const [users, setUsers] = React.useState();

    React.useEffect(() => {
        setLoading(true)
        const fetchData = async () =>{
            try{
                const response = await fetch(`${apiUri}/users`);
                const data = await response.json();
                setUsers(data);
            }
            catch (err){
                alert(err)
            }
        }
        fetchData();
        setLoading(false);
    }, []);

	//EDICION DE USUARIOS
	const [editingUser, setEditingUser] = React.useState(null);

	const handleCloseEditForm = () => {
		setEditingUser(null);
	};

    return(
        <AppContext.Provider
            value={{
				//Managers Principales
				apiUri,

                //ADMIN
                admin,
                setAdmin,

                data,
                setData,
				loading,
				setLoading,
				error,
				setError,
				allOk,
				setAllOk,
				statusMessage,
				setStatusMessage,

				messageHandler,


                windowWidth,
                setWindowWidth,
                toggleNavBarResponsive,
                setToggleNavBarResponsive,




                options,
                setOptions,

                isLoged,
                setIsLoged,
				closeSession,

                users,
                setUsers,
				editingUser,
				setEditingUser,
				handleCloseEditForm

            }}
        >
            { children }
        </AppContext.Provider>
    );
}

export { AppProvider };