import "./styles.css";

const ButtonCard = ({children, className="button-card-container", title="", onClick, type="button", padding=20, borderWidth=1}) => {
    return(
        <button
            className={className}
            title={title}
            onClick={(event) => onClick(event)}
            type={type}
            style={{
                padding: padding,
                borderWidth: borderWidth
            }}
        >
            {children}
        </button>
    );
}

export { ButtonCard };