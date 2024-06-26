const validateObjectValues = (values) => {
	const arrayValues = Object.values(values);
	const filterConditions = arrayValues.some((key) => key === null)

	if (filterConditions) {
		throw new Error("No pueden haber campos vacios")
	}
}

module.exports = { validateObjectValues };