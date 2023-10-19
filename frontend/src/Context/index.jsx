import React from "React";

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

    return(
        <AppContext.Provider
            value={{
                windowWidth,
                setWindowWidth,
                toggleNavBarResponsive,
                setToggleNavBarResponsive
                
            }}
        >
            { children }
        </AppContext.Provider>
    );
}

export { AppProvider };