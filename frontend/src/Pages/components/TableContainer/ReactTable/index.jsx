import React from "react";
import { AppContext } from "../../../../Context";
import "./styles.css";

const ReactTable = () => {
	const context = React.useContext(AppContext)

	const data = context.consolidado;
	const columns = Array.from(new Set(data.flatMap((row) => Object.keys(row))));

	return (
		<table className="table-container" id="dataTable">
			<thead>
				<tr>
					{columns.map((column, index) => (
						<th key={index}>{column}</th>
					))}
				</tr>
			</thead>

			<tbody>
				{data?.map((row, rowIndex) => (
					<tr key={rowIndex}>
						{columns.map((column, colIndex) => (
							<td key={colIndex}>{row[column]}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export { ReactTable };