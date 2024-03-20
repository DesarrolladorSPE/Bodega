import React from "react";
import * as XLSX from "xlsx";

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

	const fetchData = async (endpoint) => {
        try {
            const response = await fetch(`${apiUri}/${endpoint}`);

            if (!response.status === 200) {
				messageHandler("error", `Error fetching ${endpoint}: ${response.statusText}`);
                // throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
            }

            return await response.json();

        }
        catch (err) {
			messageHandler("error", `Error fetching ${endpoint}: ${err.message}`);
			console.log(err)
            // throw new Error(`Error fetching ${endpoint}: ${err.message}`);
        }
    };

    const fetchAllData = async () => {
        try {
            setLoading(true);
            const endpoints = [
				"info"
            ];

            // Realizar todas las solicitudes en paralelo
            const resultsArray = await Promise.all(endpoints.map(fetchData));

            const combinedResults = resultsArray.reduce((acc, result) => {
                return { ...acc, ...result };
            }, {});

            setResponseData(combinedResults);
			setUsers(combinedResults.users)

        } catch (err) {
			messageHandler("error", `${err.message}`);
        }
        finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchAllData();
    }, [isLoged]);

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
		setShowConsolidado(null);
		setToggleNavBarResponsive(false);
	}


    //CONSOLIDADO
	const [filters, setFilters] = React.useState({
		// "mes": currentMonth,
		// "ano": currentYear,
		"mes": "",
		"ano": "",
    });

	const handleFilterChange = (filterName, value) => {
        setFilters((prevFilters) => ({ ...prevFilters, [filterName]: value }));
    };

    const [showConsolidado, setShowConsolidado] = React.useState(false);
    const [consolidado, setConsolidado] = React.useState([]);

	const fetchConsolidadoData = async () => {
        try {
            setLoading(true);
            const filterParams = new URLSearchParams(filters);
            const endpoints = [
				// `consolidado?${filterParams.toString()}`
				`consolidado/tablas?${filterParams.toString()}`
            ];

            const resultsArray = await Promise.all(endpoints.map(fetchData));

			setConsolidado(resultsArray[0]);

        } catch (err) {
			messageHandler("error", `${err.message}`);
        }
        finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchConsolidadoData();
    }, [filters, showConsolidado]);


	//Exportar Consolidado a Excel
	const formatConsolidadoName = (mes, ano) => {
		const formattedMes = mes.length === 1 ? `0${mes}` : mes;

		if (formattedMes === "" && ano === "") {
			return "Consolidado_Completo";
		}

		// Construir el nombre formateado
		const name = `Consolidado-${formattedMes}-${ano}`;
		return name;
	};

	const exportToExcel = (columns) => {
		try {
			setLoading(true);
			const table = document.getElementById("dataTable");

			// Obtener datos de la tabla
			const rows = table.querySelectorAll("tbody tr");
			const exportedData = Array.from(rows).map((row) => {
				const cells = row.querySelectorAll("td");
				return Array.from(cells).map((cell) => cell.textContent);
			});

			// Crear una hoja de trabajo
			const ws = XLSX.utils.aoa_to_sheet([columns, ...exportedData]);

			let name = formatConsolidadoName(filters.mes, filters.ano);

			// Crear un libro de trabajo
			const wb = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(wb, ws, name);

			// Guardar el archivo
			XLSX.writeFile(wb, `${name}.xlsx`);
			messageHandler("all-ok", `Archivo ${name}.xlsx exportado correctamente.`);
		}
		catch (err) {
			messageHandler("error", `${err.message}`);
		}
		finally {
			setLoading(false)
		}
	};


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

				//Consolidado
				handleFilterChange,
				consolidado,
				setConsolidado,
				showConsolidado,
				setShowConsolidado,

				//Exportar a excel
				exportToExcel,
            }}
        >
            { children }
        </AppContext.Provider>
    );
}

export { AppProvider };