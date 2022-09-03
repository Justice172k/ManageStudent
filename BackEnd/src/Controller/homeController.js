const crudServices = require('../Service/crudServices')

const getHomePage = (req, res) => {
    crudServices.getAllUsers()
        .then(data => {
            console.log(data.message);
            if (data.message === `ListUser is empty`)
                // res.render('home.ejs', { message: 'ListUsers is empty', data: data })
                return res.status(200).json({ message: 'ListUsers is empty', data: data })
            return res.status(200).json({ message: 'ListUsers ', data: data })
            // res.render('home.ejs', { message: 'ListUsers ', data: data })
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ message: 'Something went wrong' })
        });
    // res.render('home.ejs')
}

const getAllUser = (req, res) => {
    crudServices.getUsers()
        .then(data => {
            console.log(data.message);
            return res.status(200).json(data)
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ message: 'Something went wrong' })
        });
}

const updateData = (req, res) => {
    console.log(req.query)
    crudServices.updateUser(req.query.IDCard, req.body)
        .then(data => {
            console.log(data.message);
            if (data.message === `Update user successfully`)
                return res.status(200).json(data)
            return res.status(401).json(data)
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ message: 'Something went wrong' })
        });
}

const addData = (req, res) => {
    crudServices.addNewUser(req.body)
        .then(data => {
            console.log(data.message);
            if (data.message === `Add new user successfully`)
                return res.status(200).json(data)
            return res.status(401).json(data)
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ message: 'Something went wrong' })
        });
}

const deleteData = (req, res) => {
    crudServices.deleteUser(req.query.IDCard)
        .then(data => {
            console.log(data.message);
            if (data.message === `Delete user successfully`)
                return res.status(200).json(data)
            return res.status(401).json(data)
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ message: 'Something went wrong' })
        });
}


const getUserData = (req, res) => {
    crudServices.getUser(req.params.IDCard)
        .then(data => {
            console.log(data.message);
            if (data.message === `Get user successfully`)
                return res.status(200).json(data)
            return res.status(401).json(data)
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ message: 'Something went wrong' })
        });
}
module.exports = {
    getHomePage: getHomePage,
    getAllUser: getAllUser,
    updateData: updateData,
    deleteData: deleteData,
    addData: addData,
    getUserData: getUserData,
}