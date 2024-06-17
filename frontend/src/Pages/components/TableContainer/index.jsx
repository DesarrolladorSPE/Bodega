import React from "react";
import { AppContext } from "../../../Context";
import { Title } from "../Title";
import { ReactTable } from "./ReactTable";

import { AiOutlineClose } from "react-icons/ai";

import { FiltersContainer } from "../FiltersContainer";
import { MessageCard } from "../MessageCard";

import "./styles.css";
import { NotFoundCard } from "../NotFoundCard";
import { handleNotifications } from "../../../utils/handleNotifications";
import { tableToExcel } from "../../../utils/exportToExcel";

const TableContainer = () => {
	const context = React.useContext(AppContext)

	const data = context.responseData?.consolidado || [];
	let columns = Array.from(new Set(data?.flatMap((row) => Object.keys(row))));

	const exportToExcel = async (columns) => {
		try {
			context.setLoading(true);
			const name = await tableToExcel(columns, context.filters?.ano, context.filters?.mes);
			handleNotifications("success", `Archivo ${name}.xlsx exportado correctamente.`);
		}
		catch (err) {
			handleNotifications("error", err.message);
		}
		finally {
			context.setLoading(false)
		}
	};

	return(
		<div className="consolidado-table-container">
			<div className="back-button-and-title-container">
				<Title
					color={"#FFF"}
					borderColor={"#FFF"}
				>
					Consolidado
				</Title>
			</div>
			<div className="button-and-filters-container">
				{data.length > 0 &&
					<button onClick={() => {exportToExcel(columns)}}>
						Exportar a Excel
					</button>
				}
				<FiltersContainer/>

			</div>
			<MessageCard/>

			<div className="scroll-wrapper">
				{data.length > 0 ?
					<ReactTable
						data={data}
						columns={columns}
					/>
					:
					<NotFoundCard/>
				}

			</div>
		</div>
	);
}

export { TableContainer }