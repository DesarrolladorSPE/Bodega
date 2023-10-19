import React from "React";

export const AppContext = React.createContext();

const AppProvider = ({children}) => {


    return(
        <AppContext.Provider
            value={{

            }}
        >
            { children }
        </AppContext.Provider>
    );
}

export { AppProvider };