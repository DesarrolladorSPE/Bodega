import "./styles.css";

const SubTitle = ({children, textAlign = "start"}) => {

    return(
        <div className="sub-title">
            <h2  style={{
                textAlign: textAlign,
            }}>
                {children}
            </h2>
        </div>
    );
}

export { SubTitle };