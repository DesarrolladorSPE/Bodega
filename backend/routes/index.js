const express = require("express");

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');

const loginRouter = require("./login.router");
const filesRouter = require("./files.router");
const usersRouter = require("./users.router");
const consolidadoRouter = require("./consolidado.router");
const fuentesRouter = require("./fuentes.router");


const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${properties.get("app.api.structure")}/v1`, router);

	// Routes

	router.use("/login", loginRouter);
	router.use("/files", filesRouter);
	router.use("/users", usersRouter);
	router.use("/consolidado", consolidadoRouter)
	router.use("/fuentes", fuentesRouter);
}

module.exports = routerApi;