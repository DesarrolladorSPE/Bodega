const formatConsolidadoName = (mes, ano) => {
	const formattedMes = mes.length === 1 ? `0${mes}` : mes;

	if (formattedMes === "" && ano === "") {
		return "Consolidado_Completo";
	}

	const name = `Consolidado-${formattedMes}-${ano}`;
	return name;
};

export { formatConsolidadoName };