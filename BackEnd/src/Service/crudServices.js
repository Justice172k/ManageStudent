const e = require('express');
const { pool } = require('../Config/connectDb');



const getUsers = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users', (err, result) => {
            if (err)
                reject(err);
            else {
                if (result === undefined || result === null)
                    resolve({
                        message: 'List user is empty',
                        data: {}
                    });
                else
                    resolve({
                        message: 'Get all users successfully',
                        data: result
                    });
            }
        })
    });
}

const checkUserLogin = (username, password) => {

    return new Promise(async (resolve, reject) => {

        pool.query(`SELECT * FROM Users WHERE Email = '${username}'`, (err, result) => {
            if (err)
                reject(err);
            else {
                if (result[0] === undefined || result[0] === null)

                    resolve({
                        message: `User not found`,
                        data: {}
                    });
                else
                    if (result[0].Password === password)
                        resolve({
                            message: `User login successfully`,
                            data: result
                        });
                    else
                        resolve({
                            message: `Wrong password`,
                            data: {}
                        });
            }

        });
    });
}

const addNewUser = (newUser) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO Users (IDCard, FullName, Gender, DateOfBirth, StudentCode, `Password`, University, Department, PhoneNumber, Email, Address, Position)'
            + `VALUES ( '${newUser.IDCard}', '${newUser.FullName}', '${newUser.Gender}', '${newUser.DateOfBirth}', '${newUser.StudentCode}', '${newUser.Password}', '${newUser.University}', '${newUser.Department}', '${newUser.PhoneNumber}', '${newUser.Email}','${newUser.Address}', '${newUser.Position}' )`
            , (err, result) => {
                if (err)
                    resolve({
                        message: `Add user failed`,
                        data: {}
                    });
                else {
                    resolve({
                        message: `Add new user successfully`,
                        data: result
                    });
                }
            })
    });
}

const updateUser = (updateIdCard, updateData) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE Users SET IDCard = '${updateData.IDCard}', FullName = '${updateData.FullName}', Gender = '${updateData.Gender}',`
            + `DateOfBirth = '${updateData.DateOfBirth}', StudentCode = '${updateData.StudentCode}', ` + `Password` + `= '${updateData.Password}', University = '${updateData.University}',  `
            + `Department = '${updateData.Department}', PhoneNumber = '${updateData.PhoneNumber}', Email = '${updateData.Email}', Address = '${updateData.Address}',  Position = '${updateData.Position}' `
            + ` WHERE IDCard = '${updateIdCard}'`, (err, result) => {
                if (err)
                    resolve({
                        message: `Update user failed`,
                        data: {}
                    });
                else {
                    resolve({
                        message: `Update user successfully`,
                        data: {}
                    });
                }
            })
    });
}

const deleteUser = (deleteIDCard) => {
    console.log(deleteIDCard);
    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM Users WHERE IDCard = ${deleteIDCard}`, (err, result) => {
            if (err)
                resolve({
                    message: `Delete user failed`,
                    data: {}
                });
            else {
                resolve({
                    message: `Delete user successfully`,
                    data: {}
                });
            }
        });
    });
}

const getUser = (IDCard) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM Users WHERE IDCard = '${IDCard}'`, (err, result) => {
            if (err)
                resolve({
                    message: `get user failed`,
                    data: {}
                });
            else {
                resolve({
                    message: `Get user successfully`,
                    data: result
                });
            }
        });
    });
}


module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    checkUserLogin: checkUserLogin,
    updateUser: updateUser,
    deleteUser: deleteUser,
    addNewUser: addNewUser,
}