const express = require('express')


let configViewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "D:/Manage_Member/src/views");
}



module.exports = {
    configViewEngine: configViewEngine,
}

