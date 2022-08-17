const db = require('../config/db');




class Post {

    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    // save() {

    //     let sql = `INSERT INTO users (name, email, password) VALUES ('${this.name}', '${this.email}', '${this.password}')`;
    //     return db.execute(sql);;
    // }

  static  post(name, email, password) {
        let sql = `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`;
        return db.execute(sql);
    }

    static getAll() {
        let sql = `SELECT * FROM users`;
        return db.execute(sql);
    }

}

module.exports = Post;

