
// ------------ external modules -----------------------
// Require express to make easy
// routing on server side.
// Creating express object
const express = require("express");
 
// Require path module
const path = require('path');
 
// Require pug template engine
const pug = require("pug");
 
// Require mongoose to use mongoDb
// in a easier way
const mongoose = require("mongoose");
 
// ------------ app variables and settings -----------------------
const app = express();

// Define a service port/ip
const srv_port = process.env.SRV_PORT || "8080";
const srv_ip = process.env.SRV_IP || "0.0.0.0";

// Make a static route to use your
// static files in client side
app.use('/static', express.static('static'));
 
// Middleware for parsing
app.use(express.urlencoded());
 
// Define and use pug engine so also
// declare path on rendering
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
 
// ------------ database setup -----------------------
// Database Connection
mongoose.connect(
    "mongodb://localhost:27017/feedback",
    { useUnifiedTopology: true }
);
 
// ------------ routing -----------------------
require('./routes/view.js')(app)
require('./routes/form.js')(app);
require('./routes/clean.js')(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
}); 

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  }); 

 
// ------------ server activation -----------------------

app.listen(srv_port, srv_ip, () => {
    console.log(`Listening to requests on http://${srv_ip}:${srv_port}`);
});