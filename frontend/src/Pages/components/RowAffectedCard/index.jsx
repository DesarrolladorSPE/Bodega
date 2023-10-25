import React from "react";
import { AppContext } from "../../../Context";

import { AiOutlineClose } from "react-icons/ai";

import "./styles.css";

const RowAffectedCard = () => {
	const context = React.useContext(AppContext);

	return(
		<>
			{ context.data &&
				<div className="row-log-card-container">
					<p>
						Se ingresaron <span>{context.data.recordsEnteredCount}</span> registros de <span>{context.data.rowCount}</span> registros
					</p>
					<button
						onClick={() => context.setData(null)}
					>
						<AiOutlineClose/>
					</button>
				</div>
			}
		</>

	);
}

export { RowAffectedCard };