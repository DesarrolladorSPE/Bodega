import "./styles.css";

const Title = ({children, color, borderColor}) => {

    return (
        <div className="title-container">
            <h1 className="title" style={{
                color: color
            }}>
                {children}
            </h1>
        </div>

    );
}

export { Title };