const express = require('express');
const app = express();

const path = require('path');
const viewsPath = path.join(__dirname + '/../views');
const HomeRouter = require('../routes/Home.router');
const LoginRouter = require('../routes/Login.router');
const SinginRouter = require('../routes/Singin.router');
const cookieParser = require("cookie-parser");

const router = express.Router();


app.use((req, res, next) => {
    const { url, method } = req;
    console.log(`${method} ${url}`);
    next();
})

app.use(express.json());


app.use('/singin',SinginRouter)
app.use("/login", LoginRouter);
app.use('/', HomeRouter);



app.listen(3121, () => {
    console.log('server is running on port 3121');
}
);