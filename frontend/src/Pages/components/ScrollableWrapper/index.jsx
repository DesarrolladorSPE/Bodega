import "./styles.css";

const ScrollableWrapper = ({children,  maxHeight = 250, gap = 0, alignItems="center"}) => {
    return(
        <div className="scrollable-wrapper-container" style={{
            maxHeight: maxHeight,
            gap: gap,
            alignItems: alignItems,
        }}>
            {children}     
        </div>
    );
}

export { ScrollableWrapper };