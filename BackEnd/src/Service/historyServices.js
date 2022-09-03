const { pool } = require('../Config/connectDb');


const addUserHistory = (IDCard) => {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO history (IDCard, TimeCheckIn)'
            + `VALUES ( '${IDCard}', now())`
            , (err, result) => {
                if (err)
                    reject(new Error(`Add user failed`));
                else {
                    // console.log(result);
                    resolve(`Add New User successfully`);
                }
            })
    });
}



module.exports = {
    addUserHistory: addUserHistory,
}