const fs    = require('fs');
const path  = require('path');
const Userspath = path.join(__dirname + '/../data/users.json');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");



function ReadUsers() {
   const MyUsers = JSON.parse(fs.readFileSync(Userspath, 'utf8'));
    console.log(MyUsers);
    return MyUsers
}

function AddaUser(user) {
    const MyUsers = ReadUsers();
    MyUsers.push(user);
    fs.writeFileSync(Userspath, JSON.stringify(MyUsers));
}
async function HashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}
async function ComparePasswordHash(password, HashPassword) {
    const isMatch = await bcrypt.compare(password, HashPassword);
    return isMatch;
}

function comparePassword(password, username) {
    const students = ReadUsers();
    const user = students.find((student) => student.username === username);
    if (user) {
        return ComparePasswordHash(password, user.password);
    }
    return false;
}
function NewToken(username) {
    const token = jwt.sign(username, 'secret');
    return token;
}













module.exports = {ReadUsers  , AddaUser , HashPassword , ComparePasswordHash , comparePassword ,NewToken};