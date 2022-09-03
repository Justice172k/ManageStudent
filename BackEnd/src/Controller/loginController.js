const crudServices = require('../Service/crudServices')
const homeController = require("../Controller/homeController")

const checkUserLogin = (req, res) => {
    console.log(req.body.password)
    crudServices.checkUserLogin(req.body.username, req.body.password)
        .then((data) => {
            console.log(data)
            if (data.message === `User not found` || data.message === `Wrong password`) {
                return res.status(401).send(data)

            }
            return res.status(200).send(data);

        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ message: 'Something went wrong' })
        });
}

const getLoginForm = (req, res) => {
    res.render('login.ejs')
}


module.exports = {
    getLoginForm: getLoginForm,
    checkUserLogin: checkUserLogin
}