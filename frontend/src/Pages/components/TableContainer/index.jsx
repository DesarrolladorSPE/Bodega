import { ReactTable } from "./ReactTable";

const TableContainer = () => {
	const data = [
		{ column1: 'Dato 1', column2: 'Dato 2' },
		{ column1: 'Dato 3', column2: 'Dato 4' },
		// Agrega más datos según tus necesidades
	];

	return(
		<div className="consolidado-container">
			{/* <div className="table-container">
			</div> */}
			<ReactTable data={data}/>

		</div>
	);
}

export { TableContainer }