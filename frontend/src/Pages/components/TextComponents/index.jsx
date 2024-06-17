import "./styles.css";

const TextCard = ({children, textAlign="start", width="100%", className="", fontSize=16}) => {
    return(
        <p 
            style={{
                textAlign: textAlign, 
                width: width,
                fontSize: fontSize,
            }} 
            className={`text-card ${className}`}>{children}</p>
    );
}

const SpanCard = ({children, className}) => {
    return(
        <span className={`span-card ${className}`}>{children}</span>
    );
}

export { TextCard, SpanCard }