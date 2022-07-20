const fs = require('fs');
const path = require('path');
const Userspath = path.join(__dirname + '/../data/users.json');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { log } = require('console');
const saltRounds = 10;

function ReadUsers() {
    const MyUsers = JSON.parse(fs.readFileSync(Userspath, 'utf8'));
    // console.log(MyUsers);
    return MyUsers
}
async  function SliceUsers(email) {

    const obj = ReadUsers()
    obj.forEach(emailLogin => {
        if (emailLogin === `${email}`) {
            console.log(emailLogin.name);
           const name = toString(emailLogin)
           
              
        }
        
    }
   
    )
}



function AddaUser(user) {
    const MyUsers = ReadUsers();
  
    MyUsers.push(user);
    fs.writeFileSync(Userspath, JSON.stringify(MyUsers , null, 2));
}






async function hashpsw(password) {

    const hashpsw = await bcrypt.hash(password, saltRounds);

    return hashpsw
}
async function comparePasswordHash(password, passwordhash) {
    const hashpsw = await bcrypt.compare(password, passwordhash);
    return hashpsw
}

function comparePassword(password, email) {
    const users = ReadUsers()
    const user = users.find((use) => use.email === email)

    if (user) {
        return comparePasswordHash(password, user.password)
    }
    return false
}





function newJwt(name) {
    const token = jwt.sign(name, 'secret')
    return token

}
function verifytoken(token) {
    try {
        const decoded = jwt.verify(token, 'secret')
        return decoded
    } catch (err) {
        console.log(err)
        return false
    }

}
function Login(password, email) {

    const user = ReadUsers()

    if (user.find((user) => user.email === email && user.password === password)) {

        return true

    } else {
        return false

    }

}









module.exports = {
    ReadUsers, AddaUser, hashpsw, newJwt, comparePasswordHash, comparePassword, verifytoken, Login, SliceUsers
};