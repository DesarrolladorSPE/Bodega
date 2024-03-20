import { GovNavbar } from "../GovNavbars";
import "./styles.css"

const MainContainer = ({children}) => {
    return(
        <div className="main-container">
			<div className="color-container">
				{children}
			</div>
        </div>
    );
}

export { MainContainer };