const express = require('express');
const router = express.Router();
const Userapi = require('../api/User.api');


const path = require('path');
const { join } = require('path');
const { json } = require('express');
const viewsPath = path.join(__dirname + '/../views');

router.use("/", express.static(viewsPath + "/login"));

router.get("/", (req, res) => {
        res.sendFile((viewsPath + "/login/login.html"));
    Userapi.SliceUsers()


        
    }
);
router.post("/", async (req, res) => {
    const data = req.body;
   

    const passwordLogin = data.password
    const emailLogin = data.email

    const dataSingin =  Userapi.ReadUsers()

  

    for (let obj of dataSingin) {
        const emailSingin = obj.email
        // console.log("you", emailSingin);
    



        // let nameSingin = obj.name
      

    }
        

        const hashing = await Userapi.comparePassword(passwordLogin, emailLogin)

         Userapi.Login(hashing)


   
              if (hashing) {

                //   let aa = await Userapi.SliceUsers(emailLogin)
                //   console.log(JSON.stringify(aa));
                  const obj = Userapi.ReadUsers()
                  obj.forEach(o => {
                    const email = emailLogin
                      if (o.email === `${email}`) {
                        
                          const namee = o.name





        const token = Userapi.newJwt({ email: emailLogin })
             res.cookie(`${namee}` ,  token)
            res.end(JSON.stringify({ msg: "Welcome to token" }))

                      }
                  }

                  )

        }
     
    

}
);



module.exports = router;