import React from "react";

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    React.useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


    const [toggleNavBarResponsive, setToggleNavBarResponsive] = React.useState(false);


    //API
    const [data, setData] = React.useState({});
    const [apiUri, setApiUri] = React.useState("http://localhost:3080/api/v1");


    const [options, setOptions] = React.useState({});
    React.useEffect(() => {
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
    }, []);

    //Login
    const [ isLoged, setIsLoged ] = React.useState(false);

    return(
        <AppContext.Provider
            value={{
                windowWidth,
                setWindowWidth,
                toggleNavBarResponsive,
                setToggleNavBarResponsive,
                apiUri,
                data,
                setData,
                options,
                setOptions,

                isLoged,
                setIsLoged

            }}
        >
            { children }
        </AppContext.Provider>
    );
}

export { AppProvider };