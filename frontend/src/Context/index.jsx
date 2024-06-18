import React from "react";

import { fetchAllData } from "../utils/handleData/handleFetchData";
import { handleNotifications } from "../utils/handleNotifications";

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const domain = import.meta.env.VITE_API_DOMAIN;
    const apiStructure = import.meta.env.VITE_API_STRUCTURE;

    const api = `${domain}/${apiStructure}/v1`;

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


	// FETCH DATA
	const [responseData, setResponseData ] = React.useState(null);
    const [users, setUsers] = React.useState();
    const [ isLoged, setIsLoged ] = React.useState(false);

    const fetchData = async (endpoints) => {
        try {
            setLoading(true);
            const data = await fetchAllData(endpoints);
            setResponseData((prevData) => ({
                ...prevData,
                ...data
            }));
        }
        catch (err) {
            handleNotifications("error", err.message)
        }
        finally {
            setLoading(false);
        }
    }


    React.useEffect(() => {
        const endpoints = [
            `info`,
        ]
        fetchData(endpoints)
    }, [isLoged]);


	//CONSOLIDADO
	const [filters, setFilters] = React.useState({
		"mes": "",
		"ano": "",
	});

	React.useEffect(() => {
		const filterParams = new URLSearchParams(filters);
		const endpoints = [
			`consolidado/tablas?${filterParams.toString()}`
		];

        fetchData(endpoints);
    }, [filters]);


    //Login
		//CERRAR SESION
	const closeSession = () => {
		setAdmin(false);
		setIsLoged(false);
		resetUsersInfo();

		messageHandler("all-ok", "Sesión cerrada correctamente")
	}

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

	// Modal de Confirmacion:

	const [openConfirmationModal, setOpenConfirmationModal] = React.useState({
		status: false,
		title: "",
		onConfirm: null,
		onCancel: null,
	});

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



				responseData,
				setResponseData,
				filters,
				setFilters,

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

				openConfirmationModal,
				setOpenConfirmationModal
            }}
        >
            { children }
        </AppContext.Provider>
    );
}

export { AppProvider };