import React from "react";
import { AppContext } from "../../../Context";
import { Title } from "../Title";
import { ReactTable } from "./ReactTable";

import { AiOutlineClose } from "react-icons/ai";

import { FiltersContainer } from "../FiltersContainer";

import "./styles.css";

const TableContainer = () => {
	const context = React.useContext(AppContext)

	const data = context.consolidado;
	let columns = Array.from(new Set(data?.flatMap((row) => Object.keys(row))));

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
			<div>
				<button onClick={() => {context.exportToExcel(columns)}}>
					Exportar a Excel
				</button>
				<FiltersContainer/>

			</div>

			<div className="scroll-wrapper">
				<ReactTable
					data={data}
					columns={columns}
				/>
			</div>
		</div>
	);
}

export { TableContainer }