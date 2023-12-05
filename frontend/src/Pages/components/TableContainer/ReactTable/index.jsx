import React from 'react';
import { useTable } from 'react-table';

const ReactTable = ({ data }) => {
  const columns = React.useMemo(() => [
		{
			Header: 'Columna 1',
			accessor: 'column1', // Cambia 'column1' por el nombre real de tu columna
		},
		{
			Header: 'Columna 2',
			accessor: 'column2',
		},
      // Agrega más columnas según tus necesidades
    ], []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table">
		<thead>
			{headerGroups.map((headerGroup, index) => (
				<tr key={index} {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map((column, index) => (
						<th key={index} {...column.getHeaderProps()}>{column.render('Header')}</th>
					))}
				</tr>
			))}
		</thead>


		<tbody {...getTableBodyProps()}>
			{rows.map((row, index) => {
				prepareRow(row);

				return (
					<tr key={index}  {...row.getRowProps()}>
						{row.cells.map((cell, index) => (
							<td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
						))}
					</tr>
				);
			})}
		</tbody>
    </table>
  );
};

export { ReactTable };