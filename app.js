// const express = require('express')
import  express from 'express'
import cors from 'cors'

import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";
import TuitsController
    from "./controllers/tuits/tuits-controller.js";

const app = express();
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UsersController(app);

app.listen(4000)
