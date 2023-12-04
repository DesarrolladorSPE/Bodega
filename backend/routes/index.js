const express = require("express");

const loginRouter = require("./login.router");
const filesRouter = require("./files.router");
const usersRouter = require("./users.router");
const consolidadoRouter = require("./consolidado.router");
const informationRouter = require("./information.router");




const routerApi = (app) => {
	const router = express.Router();
	app.use("/api/v1", router);

	// Routes
	router.get("/", (request, response) => {
		response.send({});
	});

	router.use("/login", loginRouter);
	router.use("/files", filesRouter);
	router.use("/users", usersRouter);
	router.use("/consolidado", consolidadoRouter)
	router.use("/info", informationRouter)
}

module.exports = routerApi;