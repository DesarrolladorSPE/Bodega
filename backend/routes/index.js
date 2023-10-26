const express = require("express");

const loginRouter = require("./login.router");
const fuentesRouter = require("./fuentes.router");
const filesRouter = require("./files.router");
const usersRouter = require("./users.router");
const consolidadoRouter = require("./consolidado.router");



const routerApi = (app) => {
	const router = express.Router();
	app.use("/api/v1", router);

	// Routes
	router.get("/", (request, response) => {
		response.send({});
	});

	router.use("/login", loginRouter);
	router.use("/fuentes", fuentesRouter);
	router.use("/files", filesRouter);
	router.use("/users", usersRouter);
	router.use("/consolidado", consolidadoRouter)
}

module.exports = routerApi;