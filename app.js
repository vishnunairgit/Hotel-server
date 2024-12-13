const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectToDatabase = require('./config/Db');


// Error handling for dotenv configuration

if (dotenv.error) {
  throw dotenv.error
}
console.log(process.env.JWT_PASSWORD, "-----jwt password-----");

// Route imports
const menuRouter = require('./routes/menuRouter'); 

const  app = express();

// Database connection
connectToDatabase()

app.use(cors({
  origin: ['https://hotel-client-honp.onrender.com', 'http://localhost:3000']
}));

app.use(cors({
  origin: '*'
}));


// app.use(cors({
//   origin: ['https://hotel-client-honp.onrender.com', 'http://localhost:3000'], // Allowed origins
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
//   credentials: true // Allow cookies
// }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Static files
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use(menuRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// // Initialize WebSocket server placeholder
app.locals.wss = null;

module.exports = app;
