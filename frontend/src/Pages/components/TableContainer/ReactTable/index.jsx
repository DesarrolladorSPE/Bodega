import "./styles.css";

const ReactTable = ({ data }) => {

	const columns = Array.from(
		new Set(data.flatMap((row) => Object.keys(row)))
	);

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
				{data.map((row, rowIndex) => (
					<tr key={rowIndex}>
					{columns.map((column, colIndex) => (
						<td key={colIndex}>
						{Array.isArray(row[column]) ? (
							<ul>
							{row[column].map((item, itemIndex) => (
								<li key={itemIndex}>{item}</li>
							))}
							</ul>
						) : (
							row[column]
						)}
						</td>
					))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export { ReactTable };