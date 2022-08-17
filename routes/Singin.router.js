const express = require('express');
const router = express.Router();
const ApiUser = require('../api/User.api');
const path = require('path');
const viewsPath = path.join(__dirname + '/../views');
router.use("/", express.static(viewsPath + "/singin"));
const Controller = require('../controllers/REQ.controller');



router.get("/", (req, res) => {
    res.sendFile((viewsPath + "/singin/singin.html"));
}
)



router.post("/", async (req, res) => {
    const data = req.body;
    const pass = data.password;
    const email = data.email;
    const name = data.name;


    const stringify = JSON.stringify(data);
console.log(`data: ${stringify}`);
console.log(`res: ${name}`);
   

    const pswHash = await ApiUser.hashpsw(pass);
    data.password = pswHash

    // ApiUser.AddaUser(data);
    res.end();


    Controller.post(name , email ,pass);
})








module.exports = router;