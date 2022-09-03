const express = require("express")
const initWebRoutes = require("./Router/web")
const { configViewEngine } = require("./Config/viewEngine")
const viewEngine = require("./Config/viewEngine")
const bodyParser = require("body-parser")
const { pool } = require('./Config/connectDb')
const { client, autoHandleMqttRequest } = require('./Mqtt/Mqtt')


const app = express()
const port = 8000
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors({ origin: true }))


viewEngine.configViewEngine(app);
initWebRoutes.initWebRoutes(app)
pool.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + pool.threadId)
})

autoHandleMqttRequest();


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

