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
    const [data, setData] = React.useState(null);
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


      //Opciones de FUente
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
		//CERRAR SESION
	const closeSession = () => {
		setAdmin(false);
		setIsLoged(false);
		resetUsersInfo();

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

	//CREACION, EDICION y ELIMINACION DE USUARIOS
		//CREACION
	const [creatingUser, setCreatingUser] = React.useState(null);
	const handleCloseCreateForm = () => {
		setCreatingUser(null);
	};

		//EDICION
	const [editingUser, setEditingUser] = React.useState(null);

	const handleCloseEditForm = () => {
		setEditingUser(null);
	};

		// RESET USERS
	const resetUsersInfo = () => {
		setCreatingUser(null);
		setEditingUser(null);
		setShowConsolidado(null);
		setConsolidadoTotal(null);
		setToggleNavBarResponsive(false);
	}


    //CONSOLIDADO
    const [showConsolidado, setShowConsolidado] = React.useState(null);
    const [consolidadoTotal, setConsolidadoTotal] = React.useState(null);
    React.useEffect(() => {
		setLoading(true);
        const fetchData = async () =>{
            try{
                const totalF1 = await fetch(`${apiUri}/consolidado/total/1`);
                const totalF2 = await fetch(`${apiUri}/consolidado/total/2`);
                const totalF3 = await fetch(`${apiUri}/consolidado/total/3`);

                const dataTotalF1 = await totalF1.json();
                const dataTotalF2 = await totalF2.json();
                const dataTotalF3 = await totalF3.json();

                const totalJovenesF1 = await fetch(`${apiUri}/consolidado/total-jovenes/1`);
                const totalJovenesF2 = await fetch(`${apiUri}/consolidado/total-jovenes/2`);
                const totalJovenesF3 = await fetch(`${apiUri}/consolidado/total-jovenes/3`);

                const dataTotalJovenesF1 = await totalJovenesF1.json();
                const dataTotalJovenesF2 = await totalJovenesF2.json();
                const dataTotalJovenesF3 = await totalJovenesF3.json();

				const totalPcdF1 = await fetch(`${apiUri}/consolidado/total-pcd/1`);
                const totalPcdF2 = await fetch(`${apiUri}/consolidado/total-pcd/2`);
                const totalPcdF3 = await fetch(`${apiUri}/consolidado/total-pcd/3`);

                const dataTotalPcdF1 = await totalPcdF1.json();
                const dataTotalPcdF2 = await totalPcdF2.json();
                const dataTotalPcdF3 = await totalPcdF3.json();

                let data = [];
                data = [
                    [...dataTotalF1, ...dataTotalF2, ...dataTotalF3],
                    [...dataTotalJovenesF1, ...dataTotalJovenesF2, ...dataTotalJovenesF3],
                    [...dataTotalPcdF1, ...dataTotalPcdF2, ...dataTotalPcdF3],
                ];

                if (totalF1.status === 200 && totalF2.status === 200 && totalF3.status === 200 &&
					totalJovenesF1.status === 200 && totalJovenesF2.status === 200 && totalJovenesF3.status === 200 &&
					totalPcdF1.status === 200 && totalPcdF2.status === 200 && totalPcdF3.status === 200
					) {
                    setConsolidadoTotal(data);
                } else {
                    messageHandler("error", "Datos no cargados correctamente");
                }
            }
            catch (err){
				messageHandler("error", err.message);
            }
        }
        fetchData();
		setLoading(false);
    }, [showConsolidado]);

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

				creatingUser,

				setCreatingUser,
				handleCloseCreateForm,

				editingUser,
				setEditingUser,
				handleCloseEditForm,

				resetUsersInfo,

                consolidadoTotal,
                setConsolidadoTotal,
				showConsolidado,
				setShowConsolidado

            }}
        >
            { children }
        </AppContext.Provider>
    );
}

export { AppProvider };