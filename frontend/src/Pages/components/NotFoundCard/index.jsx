import "./styles.css";

import { notFound } from "../../../assets";

const NotFoundCard = () => {
	return(
        <div className="record-not-found-card-container">
            <img src={notFound} alt="not-found-icon" />
            <p>No se encontró ningún dato con estos filtros.</p>
        </div>
	);
}

export { NotFoundCard };