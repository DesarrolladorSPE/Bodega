import React from "react";
import { AppContext } from "../../../Context";
import { ReactTable } from "./ReactTable";

import { FiltersContainer } from "../FiltersContainer";

import "./styles.css";
import { NotFoundCard } from "../NotFoundCard";
import { handleNotifications } from "../../../utils/handleNotifications";
import { tableToExcel } from "../../../utils/exportToExcel";
import { WrapperContainer1 } from "../WrapperContainers";
import { SubTitle } from "../SubTitle";
import { ScrollableWrapper } from "../ScrollableWrapper";

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
		<WrapperContainer1 padding={30}>
			<SubTitle>Consolidado</SubTitle>

			<div className="button-and-filters-container">
				{data.length > 0 &&
					<button onClick={() => {exportToExcel(columns)}}>
						Exportar a Excel
					</button>
				}

				<FiltersContainer/>
			</div>

			<ScrollableWrapper maxHeight={550}>
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

			</ScrollableWrapper>



		</WrapperContainer1>
	);
}

export { TableContainer }