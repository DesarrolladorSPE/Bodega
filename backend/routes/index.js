const express = require("express");

const loginRouter = require("./login.router");
const fuentesRouter = require("./fuentes.router");
const filesRouter = require("./files.router");


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
}

module.exports = routerApi;