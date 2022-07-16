const express = require('express');
const router = express.Router();
const ApiUser = require('../api/User.api');

const path = require('path');
const viewsPath = path.join(__dirname + '/../views');

router.use("/", express.static(viewsPath + "/singin"));

router.get("/", (req, res) => {
        res.sendFile((viewsPath + "/singin/singin.html"));
    }
)



router.post("/",async (req, res)  => {
    const data = req.body;




    
    ApiUser.AddaUser(data);
    res.end();
})








module.exports = router;