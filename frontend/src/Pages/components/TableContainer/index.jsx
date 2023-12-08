import React from "react";
import { AppContext } from "../../../Context";
import { Title } from "../Title";
import { ReactTable } from "./ReactTable";

import { AiOutlineClose } from "react-icons/ai";

import "./styles.css";
import { FiltersCard } from "./FiltersCards";

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
				<div>
					<FiltersCard
						id={"month-input"}
						title={"Mes"}
						array={[1,2,3,4,5,6,7,8,9,10,11,12,13]}
						onChange={(value) => context.handleFilterChange("mes", value)}
					/>
					<FiltersCard
						id={"year-input"}
						title={"Año"}
						array={[2018,2019,2020,2021,2022,2023]}
						onChange={(value) => context.handleFilterChange("ano", value)}
					/>
				</div>
				<ReactTable/>
			</div>
		</div>
	);
}

export { TableContainer }