const { Router } = require("express");
const express = require("express")
const homeController = require("../Controller/homeController")
const loginController = require("../Controller/loginController")
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/home", homeController.getHomePage)
    router.get("/home/data", homeController.getAllUser)
    router.get("/login", loginController.getLoginForm)
    router.post("/login", loginController.checkUserLogin)
    router.get("/home/getUser", homeController.getUserData)
    router.put("/home/updateData", homeController.updateData)
    router.delete("/home/deleteData", homeController.deleteData)
    router.post("/home/addData", homeController.addData)
    app.use("/", router)
}


module.exports = {
    initWebRoutes: initWebRoutes,
}
