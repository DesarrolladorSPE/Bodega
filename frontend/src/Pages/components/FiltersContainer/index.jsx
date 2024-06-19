import React from "react";
import { AppContext } from "../../../Context";
import { FiltersCard } from "../FiltersCards";

import "./styles.css";
import { handleInputChange } from "../../../utils/handleInputChange";

const FiltersContainer = () => {
	const context = React.useContext(AppContext);

	const generateYearRange = (startYear, endYear) => {
		const years = [];
		for (let year = startYear; year <= endYear; year++) {
			years.push(year);
		}
		return years;
	};

	const startYear = 2015;
	const endYear = new Date().getFullYear(); // Obtener el año actual
	const yearArray = generateYearRange(startYear, endYear);

	const monthArray = [1,2,3,4,5,6,7,8,9,10,11,12];

	return(
		<div className="month-and-year-filters-container">
			<FiltersCard
				id={"month-input"}
				title={"Mes"}
				array={monthArray}
				onChange={(value) => handleInputChange("mes", value, context.setFilters)}
			/>
			<FiltersCard
				id={"year-input"}
				title={"Año"}
				array={yearArray.reverse()}
				onChange={(value) => handleInputChange("ano", value, context.setFilters)}
			/>
		</div>
	);
}

export { FiltersContainer };