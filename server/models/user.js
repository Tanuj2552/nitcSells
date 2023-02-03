const db = require('../config/db');

class User{
    constructor(username, mail, mobileno, password){
        this.username = username,
        this.mail = mail,
        this.mobileno = mobileno,
        this.password = password
    }

    create(){
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth()+1;
        let date = d.getDate();

        let createAtDate = `${year}-${month}-${date}`;
        let sql = `
            INSERT INTO users(
                userName,
                mail,
                mobileNo,
                password
            )
            VALUES(
                '${this.username}',
                '${this.mail}',
                '${this.mobileno}',
                '${this.password}'
            );
        `;

        return db.execute(sql);
    }

    find(){
        let sql = `
            SELECT * FROM users WHERE username = "${this.username}";
        `;
        return db.execute(sql);
    }
}

module.exports = User;