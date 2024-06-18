import React from "react";
import { AppContext } from "../../../Context";

import { AiOutlineClose } from "react-icons/ai";

import "./styles.css";
import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";

const RowAffectedCard = () => {
	const context = React.useContext(AppContext);

	return(
		context.data &&
		<WrapperContainer2 padding={0}>
			<WrapperContainer1 padding={0}>
				<div className="row-log-card-container">
					<div className="all-info-main-container">
						<div className="already-and-total-data-container">
							<p>
								Se ingresaron <span>{context.data.recordsEnteredCount}</span> registros de <span>{context.data.rowCount}</span> registros
							</p>
							<p>Un total de <span>{context.data.recordsAlreadyInDatabase}</span> registros ya estan en la Base de datos.</p>
						</div>

						<div className="error-rows-container">
							<p className="error-rows-title">Un total de <span>{context.data.wrongRecordsArray.length}</span> registros con datos erroneos:</p>
							{context.data.wrongRecordsArray.map((item, index) => (
								<p
									key={index}
									className="error-row"
								> - {item.warning}</p>
							))
							}
						</div>
					</div>

					<button
						onClick={() => context.setData(null)}
					>
						<AiOutlineClose/>
					</button>
				</div>
			</WrapperContainer1>
		</WrapperContainer2>
	);
}

export { RowAffectedCard };