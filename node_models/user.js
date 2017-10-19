const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'apitest',
});

let userModel = {};

userModel.getUsers = (username, callback) => {
    if(connection){
        connection.query(
            "SELECT * FROM users WHERE username='"+username+"'",
            (err, rows) => {
                if(err){
                    throw err;
                } else {
                    callback(null, rows);
                }
            }
        );
    }
};

userModel.insertUser = (userData, callback) => {
    if(connection){
        connection.query('INSERT INTO users SET ?', userData,
            (err, result) => {
                if(err){
                    throw err;
                } else {
                    callback(null, {
                        'Insert': result
                    });
                }
            }
        )
    }
}

userModel.activateUser = (userData, callback) => {
    changeStatus(userData, callback, 1);
}

userModel.desactivateUser = (userData, callback) => {
    changeStatus(userData, callback, 0);
}

changeStatus = (userData, callback, status) => {
    if(connection){
        const sql = "UPDATE `users` SET `status` = "+status+" WHERE `users`.`username` = '"+userData.username+"'";
        connection.query(sql,
            (err, result) => {
                if(err){
                    throw err;
                } else {
                    callback(null, {
                        'Activate': result
                    });
                }
            }
        )
    }  
}

module.exports = userModel;