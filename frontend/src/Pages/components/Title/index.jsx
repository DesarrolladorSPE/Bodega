import "./styles.css";

const Title = ({children, color, borderColor}) => {

    return (
        <div className="title-container">
            <h1 className="title" style={{
                color: color,
                borderColor: borderColor
            }}>
                {children}
            </h1>
        </div>

    );
}

export { Title };