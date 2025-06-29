const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const animalRoutes = require('./routes/animals');

app.use('/animals',animalRoutes);

app.use(express.static('public'));

app.use((req,res,next) => {
    console.log('--- Middleware 1 ---');
    // console.log(req.headers);
    // console.log(`${req.headers['user-agent']}`);
    console.log(`Request method: ${req.method} ${req.url}`);

    fs.appendFileSync('logs.txt',`${Date.now()} - ${req.method} ${req.url} \n `);
    req.customData = 'Middleware 1 says hello';//we can also assign any custom variable to req which can be used/accessed by further for other middlewares and requests
    console.log('Custom parameter passed by us to req obj: ',req.customData);

    next();// if we don't do this then express stops it's execution here
});

app.use((req,res,next) => {
    console.log('--- Middleware 2 ---');

    req.customData = 'Middleware 2 was here!';
    console.log('customData in Middleware 2: ',req.customData);

    next();//here also the same case as above
});

app.get('/',(req,res) => {
    res.send('Welcome to the homepage!');
});

app.get('/about',(req,res) => {
    res.send(`About page - ${req.customData}`);//here we can have latest updated value of customData because all shares the same req object
});

app.get('/contact',(req,res) => {
    res.send('Contact us here');
});

app.listen(port,()=> {
    console.log(`Server running at http://localhost:3000`);
});