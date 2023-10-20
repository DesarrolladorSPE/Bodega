import "./styles.css"

const MainContainer = ({children}) => {
    return(
        <div className="main-container">
            {children}
        </div>
    );
}

export { MainContainer };