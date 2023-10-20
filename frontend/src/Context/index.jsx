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

    React.useEffect(() => {

        const fetchData = async () =>{
            try{
                const response = await fetch(apiUri);
                const data = await response.json();
                setData(data);
            }
            catch (err){
                alert(err)
            }
        }
        fetchData()
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

                isLoged,
                setIsLoged
                
            }}
        >
            { children }
        </AppContext.Provider>
    );
}

export { AppProvider };