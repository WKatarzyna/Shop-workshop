const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars')
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const errorController= require('./controllers/error');
// app.engine('hbs', expressHbs({layoutsDir:'views/layouts/', defaultLayout: 'main-layout'}))
app.set('view engine', 'pug'); //using pug
// app.set('view engine', 'hbs');//using handlebars
app.set('views','views')// set any content globaly on express,object readeable form app.set
let shopRoutes;
shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));// odniesienie do publicznego katalogu style css/images

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.displayError);

app.listen(3000);
