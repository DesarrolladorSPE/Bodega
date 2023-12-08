import React from "react";
import { AppContext } from "../../../Context";
import { Title } from "../Title";
import { ReactTable } from "./ReactTable";

import { AiOutlineClose } from "react-icons/ai";

import "./styles.css";

const TableContainer = () => {
	const context = React.useContext(AppContext)

	return(
		<div className="consolidado-table-container">
			<div className="back-button-and-title-container">
				<Title
					color={"#FFF"}
					borderColor={"#FFF"}
				>
					Consolidado
				</Title>
				<button onClick={() => context.setShowConsolidado(false)}>
					<AiOutlineClose/>
				</button>
			</div>
			<div className="scroll-wrapper">
				<ReactTable/>
			</div>
		</div>
	);
}

export { TableContainer }