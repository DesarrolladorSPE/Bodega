import "./styles.css";

const SubTitle = ({children, color = "#FFF", textAlign = "center"}) => {
    return(
        <p className="sub-title" style={{
            color: color,
            textAlign: textAlign
        }}>
            {children}
        </p>
    );
}

export { SubTitle };