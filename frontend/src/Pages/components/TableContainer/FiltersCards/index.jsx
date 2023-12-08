import PropTypes from "prop-types";

const FiltersCard = ({id, title, array, onChange}) => {
    FiltersCard.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        array: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired,
    }

    return(
        <>
            <label htmlFor={id}>{title}</label>
            <select
                name={id}
                id={id}
                onChange={(event) => {onChange(event.target.value)}}
            >
                <option value="">
                    Todo
                </option>
                {array?.map((item, index) => (
                    <option
                        key={index}
                        value={item}
                    >
                        {item}
                    </option>
                ))}
            </select>
        </>
    );
}

export { FiltersCard };