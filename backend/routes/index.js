const express = require("express");

const usersRouter = require("./users.router");
const loginRouter = require("./login.router");
const fuentesRouter = require("./fuentes.router");


const routerApi = (app) => {
	const router = express.Router();
	app.use("/api/v1", router);

	// Routes
	router.get("/", (request, response) => {
		response.send({});
	});
	
	router.use("/users", usersRouter);
	router.use("/login", loginRouter);
	router.use("/fuentes", fuentesRouter);
}

module.exports = routerApi;