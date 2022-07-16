const express = require('express');
const router = express.Router();
const Userapi = require('../api/User.api');


const path = require('path');
const viewsPath = path.join(__dirname + '/../views');

router.use("/", express.static(viewsPath + "/login"));

router.get("/", (req, res) => {
        res.sendFile((viewsPath + "/login/login.html"));
    }
);
router.post("/",async (req, res)  => {
    const data = req.body;
    console.log("userim",data);

    Userapi.AddaUser(data);

}
);



module.exports = router;