import "./styles.css";

const AllInfoContainer = ({children}) => {
    return(
        <div className="all-info-container">
            {children}
        </div>
    );
}

const AllInfoGridContainer = ({children, className="grid-075-125"}) => {
    return(
        <div className={`all-info-grid-container ${className}`}>
            {children}
        </div>
    );
}

export { AllInfoContainer, AllInfoGridContainer };