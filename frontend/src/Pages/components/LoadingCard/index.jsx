import React from "react";
import { AppContext } from "../../../Context";

import SyncLoader from "react-spinners/SyncLoader";

import "./styles.css";

const override = {
	borderColor: "red",
};

const LoadingCard = () => {
	const context = React.useContext(AppContext);

	return(
		<>
			{context.loading &&
				<div className="loading-container">
					<SyncLoader
						color="#4172FF"
						loading={context.loading}
						cssOverride={override}
						size={15}
						speedMultiplier={.5}
					/>
				</div>
			}
		</>

	);
}

export { LoadingCard };