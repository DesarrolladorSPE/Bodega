import "./styles.css";

const SecondarySubTitle = ({children, color = "#FFF", textAlign = "center"}) => {
    return(
        <p className="secondary-sub-title" style={{
            color: color,
            textAlign: textAlign
        }}>
            {children}
        </p>
    );
}

export { SecondarySubTitle };