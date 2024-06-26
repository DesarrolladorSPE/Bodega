const validatePassword = (password, confirmPassword) => {
	const [stringifiedPassword, stringifiedConfirmPassword] = [String(password), String(confirmPassword)]

	if (stringifiedPassword.length < 8) {
		throw new Error("La contraseña debe contener al menos 8 caracteres")
	}
	else if (!(stringifiedPassword === stringifiedConfirmPassword)) {
		throw new Error("Las contraseñas no coinciden")
	}
}

module.exports = { validatePassword };