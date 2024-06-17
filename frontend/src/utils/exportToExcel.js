import * as XLSX from "xlsx";
import { formatConsolidadoName } from "./formatConsolidadoName";

const tableToExcel = (columns, month, year) => {
	return new Promise((resolve) => {
		let name = formatConsolidadoName(month, year);

		const table = document.getElementById("dataTable");

		const rows = table.querySelectorAll("tbody tr");
		const exportedData = Array.from(rows).map((row) => {
			const cells = row.querySelectorAll("td");
			return Array.from(cells).map((cell) => cell.textContent);
		});

		const worksheet = XLSX.utils.aoa_to_sheet([columns, ...exportedData]);
		const workbook = XLSX.utils.book_new();

		XLSX.utils.book_append_sheet(workbook, worksheet, name);
		XLSX.writeFile(workbook, `${name}.xlsx`);

		resolve(name);
	})

}

export { tableToExcel }