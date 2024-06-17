import "./styles.css"

const MainContainer = ({children}) => {
    return(
        <div className="main-container">
			<div className="home-container">
				{children}
			</div>
        </div>
    );
}

export { MainContainer };