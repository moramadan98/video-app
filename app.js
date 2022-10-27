const express = require('express');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const app = express();



app.use(express.static(path.join(__dirname , "assets")));

app.use(expressLayout);
app.set('view engine' , 'ejs');


app.use('/',require('./routes/index.router'));

const port = process.env.PORT ||5000;
app.listen(port , ()=>{ console.log(`listening to port ${port}`)});