import React from "react";
import { AppContext } from "../../../Context";

import "./styles.css";

const MessageCard = () => {
	const context = React.useContext(AppContext)

	const cardManager = () => {
		if(context.error) {
			return(
				<div className="card-container error">
					<p>{context.statusMessage}</p>
				</div>
			);
		} else if (context.allOk) {
			return(
				<div className="card-container all-ok">
					<p>{context.statusMessage}</p>
				</div>
			);

		}
	}

	return(
		<>
			{cardManager()}
		</>

	);
}

export { MessageCard };