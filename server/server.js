const express = require('express');
const bodyParse = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

const port = process.env.Port || 3001;

app.listen(port, () => {
    console.log('server running'); 
})