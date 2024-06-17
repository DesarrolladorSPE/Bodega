const validateFiles = (file, option) => {
	const message = "Por favor, seleccione un archivo y el tipo.";

    if (!file){
        throw new Error(message);
    }
    if (!(file.length !== 0)) {
        throw new Error(message);
    }
    if (!option) {
        throw new Error(message);
    }
    if (!(option !== "")) {
        throw new Error(message);
    }

	return;
}

export { validateFiles };